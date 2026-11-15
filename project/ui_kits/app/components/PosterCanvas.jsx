(() => {
  const { useEffect, useRef, useState } = React;

  const FONT_FAMILY = 'Onest, "Roboto Condensed", "Arial Narrow", system-ui, sans-serif';

  const C = {
    white: '#ffffff',
    black: '#0e0e10',
    trueBlack: '#000000',
    cream: '#f5efe6',
    orange: '#f39c12',
    pill: '#f5f1ea',
    inkSecondary: '#333333',
    blueBright: '#4f63ff',
    blueDeep: '#2840e8',
    posterStart: '#b7c0f5',
    posterEnd: '#2236d8'
  };

  const FORMATS = [
    { id: '4:5', label: '4:5', name: 'Instagram 4:5', w: 1080, h: 1350, kind: 'digital', hint: '1080 × 1350 px' },
    { id: '9:16', label: '9:16', name: 'Stories 9:16', w: 1080, h: 1920, kind: 'digital', hint: '1080 × 1920 px' },
    { id: '16:9', label: '16:9', name: 'Слайд 16:9', w: 1920, h: 1080, kind: 'digital', hint: '1920 × 1080 px' },
    { id: '1:2', label: '70×140', name: 'Плакат 70×140 мм', w: 827, h: 1654, kind: 'print', hint: '827 × 1654 px · 300 dpi' }
  ];

  const VERTICAL = {
    '4:5': {
      padX: 0.07, top: 0.058, kicker: 0.019, head: 0.075, headMaxW: 0.74, headPad: 0.032,
      headGap: 0.022, program: 0.0235, programMaxW: 0.62, programGap: 0.03,
      date: 0.031, dateAnchor: 0.535, photoR: 0.085, photoCY: 0.645,
      name: 0.03, creds: 0.0205, nameGap: 0.032, price: 0.125, priceAnchor: 0.915,
      pill: 0.019, pillGap: 0.02, logoW: 0.22, logoTop: 0.895,
      priceAlign: 'right', logoAlign: 'left', photoAlign: 'left',
      maxLines: 4, lenses: [0.93, 0.1, 0.085], print: false
    },
    '9:16': {
      padX: 0.065, top: 0.072, kicker: 0.0185, head: 0.082, headMaxW: 0.82, headPad: 0.034,
      headGap: 0.026, program: 0.023, programMaxW: 0.68, programGap: 0.032,
      date: 0.03, dateAnchor: 0.435, photoR: 0.145, photoCY: 0.575,
      name: 0.03, creds: 0.02, nameGap: 0.032, price: 0.14, priceAnchor: 0.865,
      pill: 0.0185, pillGap: 0.022, logoW: 0.24, logoTop: 0.845,
      priceAlign: 'right', logoAlign: 'left', photoAlign: 'center',
      maxLines: 4, lenses: [0.9, 0.1, 0.075], print: false
    },
    '1:2': {
      padX: 0.085, top: 0.052, kicker: 0.019, head: 0.099, headMaxW: 0.8, headPad: 0.036,
      headGap: 0.026, program: 0.024, programMaxW: 0.72, programGap: 0.034,
      date: 0.032, dateAnchor: 0.4, photoR: 0.12, photoCY: 0.51,
      name: 0.032, creds: 0.021, nameGap: 0.03, price: 0.15, priceAnchor: 0.79,
      pill: 0.019, pillGap: 0.024, logoW: 0.28, logoTop: 0.905,
      priceAlign: 'right', logoAlign: 'left', photoAlign: 'left',
      maxLines: 4, lenses: [0.22, 0.72, 0.09], print: true
    }
  };

  let measureContext = null;

  function getFormat(id) {
    return FORMATS.find(format => format.id === id) || FORMATS[0];
  }

  function measuring() {
    if (!measureContext) {
      const canvas = document.createElement('canvas');
      canvas.width = 8;
      canvas.height = 8;
      measureContext = canvas.getContext('2d');
    }
    return measureContext;
  }

  function font(weight, size) {
    return `${weight} ${Math.round(size)}px ${FONT_FAMILY}`;
  }

  function setTracking(ctx, px) {
    if ('letterSpacing' in ctx) ctx.letterSpacing = `${px}px`;
  }

  function clearTracking(ctx) {
    if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
  }

  function wrapText(ctx, text, maxWidth) {
    const paragraphs = String(text || '').split(/\n+/);
    const lines = [];
    paragraphs.forEach(paragraph => {
      const words = paragraph.trim().split(/\s+/).filter(Boolean);
      if (!words.length) return;
      let line = words[0];
      for (let index = 1; index < words.length; index += 1) {
        const candidate = `${line} ${words[index]}`;
        if (ctx.measureText(candidate).width <= maxWidth) {
          line = candidate;
        } else {
          lines.push(line);
          line = words[index];
        }
      }
      lines.push(line);
    });
    return lines.length ? lines : [''];
  }

  function fitHeadline(ctx, text, maxWidth, baseSize, maxLines) {
    let size = baseSize;
    let lines = [];
    for (let step = 0; step < 40; step += 1) {
      ctx.font = font(900, size);
      lines = wrapText(ctx, text, maxWidth);
      if (lines.length <= maxLines || size <= baseSize * 0.62) break;
      size *= 0.94;
    }
    size = Math.round(size);
    ctx.font = font(900, size);
    return { size, lines: wrapText(ctx, text, maxWidth) };
  }

  function initialsOf(name) {
    const words = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (!words.length) return 'Ф';
    return `${words[0][0]}${words[1] ? words[1][0] : ''}`.toUpperCase();
  }

  function drawTextLines(ctx, lines, x, y, size, lineHeight, weight, color, align) {
    ctx.save();
    ctx.font = font(weight, size);
    ctx.fillStyle = color;
    ctx.textAlign = align || 'left';
    ctx.textBaseline = 'alphabetic';
    lines.forEach((line, index) => {
      ctx.fillText(line, x, y + index * Math.round(size * lineHeight));
    });
    ctx.restore();
  }

  function fillRoundRect(ctx, x, y, w, h, radius, color) {
    const r = Math.min(radius, h / 2, w / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawBackground(ctx, w, h, series) {
    if (series === 'poster') {
      const ink = ctx.createLinearGradient(0, 0, w, h);
      ink.addColorStop(0, C.posterStart);
      ink.addColorStop(0.48, C.blueBright);
      ink.addColorStop(1, C.posterEnd);
      ctx.fillStyle = ink;
      ctx.fillRect(0, 0, w, h);
      const glow = ctx.createRadialGradient(w * 0.82, h * 0.18, 0, w * 0.82, h * 0.18, Math.max(w, h) * 0.46);
      glow.addColorStop(0, 'rgba(244, 163, 59, 0.72)');
      glow.addColorStop(1, 'rgba(244, 163, 59, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
    } else {
      ctx.fillStyle = C.cream;
      ctx.fillRect(0, 0, w, h);
    }
  }

  function drawHairlines(ctx, w, h, series, formatId) {
    const anchors = formatId === '16:9'
      ? [[0.5, 0.2], [0.56, 0.1], [0.88, 0.3]]
      : [[0.12, 0.42], [0.16, 0.34], [0.7, 0.62]];
    ctx.save();
    ctx.strokeStyle = series === 'poster' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(14, 14, 16, 0.16)';
    ctx.lineWidth = Math.max(1, Math.round(w * 0.0016));
    anchors.forEach(([fx, fy], index) => {
      const slope = Math.tan((index % 2 === 0 ? 60 : 120) * Math.PI / 180);
      const x0 = fx * w;
      const y0 = fy * h;
      const xA = -0.15 * w;
      const xB = 1.15 * w;
      ctx.beginPath();
      ctx.moveTo(xA, y0 + (xA - x0) * slope);
      ctx.lineTo(xB, y0 + (xB - x0) * slope);
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawLenses(ctx, cx, cy, r, weight) {
    const rings = [
      [0, 0, 1],
      [0.82, 0.12, 0.72],
      [0.38, 0.72, 0.62],
      [1.18, 0.78, 0.86]
    ];
    ctx.save();
    ctx.strokeStyle = C.trueBlack;
    ctx.lineWidth = weight;
    rings.forEach(([dx, dy, scale]) => {
      ctx.beginPath();
      ctx.arc(cx + dx * r, cy + dy * r, scale * r, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawGrayscale(ctx, img, cx, cy, size) {
    const side = 512;
    const offscreen = document.createElement('canvas');
    offscreen.width = side;
    offscreen.height = side;
    const off = offscreen.getContext('2d');
    const scale = Math.max(side / img.naturalWidth, side / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    off.drawImage(img, (side - dw) / 2, (side - dh) / 2, dw, dh);
    const frame = off.getImageData(0, 0, side, side);
    const data = frame.data;
    for (let index = 0; index < data.length; index += 4) {
      const value = 0.299 * data[index] + 0.587 * data[index + 1] + 0.114 * data[index + 2];
      data[index] = value;
      data[index + 1] = value;
      data[index + 2] = value;
    }
    off.putImageData(frame, 0, 0);
    ctx.drawImage(offscreen, cx - size / 2, cy - size / 2, size, size);
  }

  function drawPhotoCircle(ctx, layout, assets) {
    const { cx, cy, r } = layout.photo;
    const size = r * 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.clip();
    if (assets.photoImg) {
      if (assets.grayscale) {
        drawGrayscale(ctx, assets.photoImg, cx, cy, size);
      } else {
        const img = assets.photoImg;
        const scale = Math.max(size / img.naturalWidth, size / img.naturalHeight);
        const dw = img.naturalWidth * scale;
        const dh = img.naturalHeight * scale;
        ctx.drawImage(img, cx - dw / 2, cy - dh / 2, dw, dh);
      }
    } else {
      ctx.fillStyle = layout.series === 'poster' ? C.cream : C.white;
      ctx.fillRect(cx - r, cy - r, size, size);
    }
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.lineWidth = Math.max(2, Math.round(layout.w * 0.0022));
    ctx.strokeStyle = C.trueBlack;
    ctx.stroke();
    ctx.restore();

    if (!assets.photoImg) {
      ctx.save();
      ctx.font = font(700, r * 0.72);
      ctx.fillStyle = C.black;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(initialsOf(layout.speakerName), cx, cy + r * 0.03);
      ctx.restore();
    }
  }

  function buildVerticalLayout(campaign, fmt, cfg, ctx) {
    const { w, h } = fmt;
    const series = campaign.series === 'light' ? 'light' : 'poster';
    const poster = series === 'poster';
    const padX = Math.round(w * cfg.padX);
    const top = Math.round(h * cfg.top);
    const kickerText = String(campaign.kicker || '').toUpperCase();
    let kickerSize = Math.round(w * cfg.kicker);
    ctx.font = font(700, kickerSize);
    setTracking(ctx, kickerSize * 0.08);
    let kickerWidth = ctx.measureText(kickerText).width + kickerText.length * kickerSize * 0.08;
    while (kickerWidth > w - padX * 2 && kickerSize > Math.round(w * cfg.kicker * 0.7)) {
      kickerSize = Math.round(kickerSize * 0.94);
      ctx.font = font(700, kickerSize);
      setTracking(ctx, kickerSize * 0.08);
      kickerWidth = ctx.measureText(kickerText).width + kickerText.length * kickerSize * 0.08;
    }
    clearTracking(ctx);
    const headBase = Math.round(w * cfg.head);
    const headMaxW = Math.round(w * cfg.headMaxW);
    const headPad = Math.round(w * cfg.headPad);
    const fitted = fitHeadline(ctx, campaign.title, headMaxW - headPad * 2, headBase, cfg.maxLines);
    const headLines = fitted.lines;
    const headLineH = Math.round(fitted.size * 1.03);
    const headTextW = Math.max(...headLines.map(line => ctx.measureText(line).width), 1);
    const longestWord = String(campaign.title || '')
      .split(/\s+/)
      .filter(Boolean)
      .reduce((longest, word) => (ctx.measureText(word).width > ctx.measureText(longest).width ? word : longest), '');
    const blockW = Math.min(Math.round(headTextW + headPad * 2), headMaxW);
    const blockH = headLines.length * headLineH + headPad * 2;
    const kickerY = top + kickerSize;
    const headlineY = kickerY + Math.round(kickerSize * 0.95) + Math.round(h * cfg.headGap);

    const programSize = Math.round(w * cfg.program);
    ctx.font = font(400, programSize);
    const programLines = wrapText(ctx, campaign.program, w * cfg.programMaxW);
    const programY = headlineY + blockH + Math.round(h * cfg.programGap);

    const dateBase = Math.round(w * cfg.date);
    let dateSize = dateBase;
    ctx.font = font(700, dateSize);
    let dateWidth = ctx.measureText(campaign.date).width;
    while (dateWidth > w - padX * 2 && dateSize > Math.round(dateBase * 0.78)) {
      dateSize = Math.round(dateSize * 0.94);
      ctx.font = font(700, dateSize);
      dateWidth = ctx.measureText(campaign.date).width;
    }
    const dateY = Math.max(
      Math.round(h * cfg.dateAnchor),
      programY + programLines.length * Math.round(programSize * 1.25) + Math.round(h * 0.03)
    );

    const photoR = Math.round(w * cfg.photoR);
    const photoCY = Math.round(h * cfg.photoCY);
    const photoCX = cfg.photoAlign === 'center' ? Math.round(w / 2) : padX + photoR;

    const nameSize = Math.round(w * cfg.name);
    const credsSize = Math.round(w * cfg.creds);
    const nameX = cfg.photoAlign === 'center' ? Math.round(w / 2) : padX + photoR * 2 + Math.round(w * cfg.nameGap);
    const nameMaxW = cfg.photoAlign === 'center' ? w - padX * 2 : w - nameX - padX;
    ctx.font = font(700, nameSize);
    const nameLines = wrapText(ctx, campaign.speaker, nameMaxW);
    ctx.font = font(400, credsSize);
    const credsLines = wrapText(ctx, campaign.credentials, nameMaxW);
    const speakerBlockH = nameLines.length * Math.round(nameSize * 1.05) + credsLines.length * Math.round(credsSize * 1.35);
    const nameY = cfg.photoAlign === 'center'
      ? photoCY + photoR + Math.round(h * 0.034) + nameSize
      : photoCY - speakerBlockH / 2 + nameSize;
    const credsY = nameY + nameLines.length * Math.round(nameSize * 1.08) + Math.round(credsSize * 0.55);

    const priceBase = Math.round(h * cfg.priceAnchor);
    const priceMaxW = w - padX * 2;
    let priceSize = Math.round(w * cfg.price);
    ctx.font = font(900, priceSize);
    while (ctx.measureText(campaign.price).width > priceMaxW && priceSize > Math.round(w * cfg.price * 0.6)) {
      priceSize = Math.round(priceSize * 0.94);
      ctx.font = font(900, priceSize);
    }
    const priceWidth = ctx.measureText(campaign.price).width;
    const priceFits = priceWidth <= priceMaxW;

    const pillSize = Math.round(w * cfg.pill);
    const pillText = String(campaign.mode || 'Онлайн').toUpperCase();
    ctx.font = font(700, pillSize);
    const pillTextW = ctx.measureText(pillText).width + pillText.length * pillSize * 0.08;
    const pillPad = Math.round(pillSize * 1.15);
    const pillW = Math.round(pillTextW + pillPad * 2);
    const pillH = Math.round(pillSize * 2.25);
    const priceTop = priceBase - priceSize;
    const pillTop = priceTop - Math.round(h * cfg.pillGap) - pillH;
    const pillX = w - padX - pillW;

    const logoW = Math.round(w * cfg.logoW);
    const logoX = cfg.logoAlign === 'right' ? w - padX - logoW : padX;
    const logoY = Math.round(h * cfg.logoTop);

    const safeX = cfg.print ? Math.round(w * (5 / 70)) : Math.round(w * 0.05);
    const safeY = cfg.print ? Math.round(h * (5 / 140)) : Math.round(h * 0.05);

    return {
      fmt,
      w,
      h,
      series,
      print: cfg.print,
      formatId: fmt.id,
      kicker: {
        text: campaign.kicker,
        x: padX,
        y: kickerY,
        size: kickerSize,
        color: C.black
      },
      headline: {
        x: padX,
        y: headlineY,
        w: blockW,
        h: blockH,
        pad: headPad,
        size: fitted.size,
        baseSize: headBase,
        lineH: headLineH,
        lines: headLines,
        maxWidth: headMaxW,
        maxLines: cfg.maxLines,
        longestWordWidth
      },
      program: {
        lines: programLines,
        x: padX,
        y: programY,
        size: programSize,
        color: poster ? C.black : C.inkSecondary
      },
      date: {
        text: campaign.date,
        x: padX,
        y: dateY,
        size: dateSize,
        width: dateWidth,
        maxWidth: w - padX * 2,
        color: C.black
      },
      photo: { cx: photoCX, cy: photoCY, r: photoR },
      speaker: {
        nameLines,
        credsLines,
        nameX,
        nameY,
        credsY,
        nameSize,
        credsSize,
        align: cfg.photoAlign === 'center' ? 'center' : 'left',
        maxWidth: nameMaxW,
        color: C.black,
        credsColor: poster ? C.black : C.inkSecondary
      },
      speakerName: campaign.speaker,
      pill: {
        text: pillText,
        x: pillX,
        y: pillTop,
        w: pillW,
        h: pillH,
        size: pillSize,
        bg: poster ? C.pill : C.orange,
        fg: C.black
      },
      price: {
        text: campaign.price,
        x: w - padX,
        baseline: priceBase,
        size: priceSize,
        align: 'right',
        color: poster ? C.white : C.black,
        width: priceWidth,
        maxWidth: priceMaxW,
        fits: priceFits
      },
      logo: { x: logoX, y: logoY, w: logoW },
      safe: {
        x: safeX,
        y: safeY,
        label: cfg.print ? '5 мм от реза' : '5% безопасное поле'
      },
      lenses: {
        cx: Math.round(w * cfg.lenses[0]),
        cy: Math.round(h * cfg.lenses[1]),
        r: Math.round(w * cfg.lenses[2])
      }
    };
  }

  function buildLandscapeLayout(campaign, fmt, ctx) {
    const { w, h } = fmt;
    const series = campaign.series === 'light' ? 'light' : 'poster';
    const poster = series === 'poster';
    const padX = Math.round(w * 0.055);
    const top = Math.round(h * 0.075);
    const kickerText = String(campaign.kicker || '').toUpperCase();
    let kickerSize = Math.round(w * 0.015);
    ctx.font = font(700, kickerSize);
    setTracking(ctx, kickerSize * 0.08);
    let kickerWidth = ctx.measureText(kickerText).width + kickerText.length * kickerSize * 0.08;
    while (kickerWidth > w - padX * 2 && kickerSize > Math.round(w * 0.015 * 0.7)) {
      kickerSize = Math.round(kickerSize * 0.94);
      ctx.font = font(700, kickerSize);
      setTracking(ctx, kickerSize * 0.08);
      kickerWidth = ctx.measureText(kickerText).width + kickerText.length * kickerSize * 0.08;
    }
    clearTracking(ctx);
    const headBase = Math.round(w * 0.052);
    const headMaxW = Math.round(w * 0.46);
    const headPad = Math.round(w * 0.022);
    const fitted = fitHeadline(ctx, campaign.title, headMaxW - headPad * 2, headBase, 3);
    const headLines = fitted.lines;
    const headLineH = Math.round(fitted.size * 1.03);
    const headTextW = Math.max(...headLines.map(line => ctx.measureText(line).width), 1);
    const longestWord = String(campaign.title || '')
      .split(/\s+/)
      .filter(Boolean)
      .reduce((longest, word) => (ctx.measureText(word).width > ctx.measureText(longest).width ? word : longest), '');
    const longestWordWidth = ctx.measureText(longestWord).width;
    const blockW = Math.min(Math.round(headTextW + headPad * 2), headMaxW);
    const blockH = headLines.length * headLineH + headPad * 2;
    const kickerY = top + kickerSize;
    const headlineY = Math.round(h * 0.155);

    const programSize = Math.round(w * 0.018);
    ctx.font = font(400, programSize);
    const programLines = wrapText(ctx, campaign.program, headMaxW);
    const programY = headlineY + blockH + Math.round(h * 0.03);

    const dateBase = Math.round(w * 0.021);
    let dateSize = dateBase;
    ctx.font = font(700, dateSize);
    let dateWidth = ctx.measureText(campaign.date).width;
    while (dateWidth > headMaxW && dateSize > Math.round(dateBase * 0.78)) {
      dateSize = Math.round(dateSize * 0.94);
      ctx.font = font(700, dateSize);
      dateWidth = ctx.measureText(campaign.date).width;
    }
    const priceBase = h - Math.round(h * 0.075);
    const priceMaxW = headMaxW;
    let priceSize = Math.round(w * 0.078);
    ctx.font = font(900, priceSize);
    while (ctx.measureText(campaign.price).width > priceMaxW && priceSize > Math.round(w * 0.078 * 0.6)) {
      priceSize = Math.round(priceSize * 0.94);
      ctx.font = font(900, priceSize);
    }
    const priceWidth = ctx.measureText(campaign.price).width;
    const priceFits = priceWidth <= priceMaxW;

    const pillSize = Math.round(w * 0.012);
    const pillText = String(campaign.mode || 'Онлайн').toUpperCase();
    ctx.font = font(700, pillSize);
    const pillTextW = ctx.measureText(pillText).width + pillText.length * pillSize * 0.08;
    const pillPad = Math.round(pillSize * 1.2);
    const pillW = Math.round(pillTextW + pillPad * 2);
    const pillH = Math.round(pillSize * 2.3);
    const priceTop = priceBase - priceSize;
    const pillTop = priceTop - Math.round(h * 0.03) - pillH;
    const dateY = Math.max(Math.round(h * 0.62), pillTop - Math.round(h * 0.06));

    const photoR = Math.round(w * 0.175);
    const photoCX = Math.round(w * 0.72);
    const photoCY = Math.round(h * 0.47);
    const nameSize = Math.round(w * 0.019);
    const credsSize = Math.round(w * 0.0145);
    const nameMaxW = Math.round(w * 0.34);
    ctx.font = font(700, nameSize);
    const nameLines = wrapText(ctx, campaign.speaker, nameMaxW);
    ctx.font = font(400, credsSize);
    const credsLines = wrapText(ctx, campaign.credentials, nameMaxW);
    const nameY = photoCY + photoR + Math.round(h * 0.05) + nameSize;
    const credsY = nameY + nameLines.length * Math.round(nameSize * 1.08) + Math.round(credsSize * 0.6);

    const logoW = Math.round(w * 0.13);

    return {
      fmt,
      w,
      h,
      series,
      print: false,
      formatId: fmt.id,
      kicker: {
        text: campaign.kicker,
        x: padX,
        y: kickerY,
        size: kickerSize,
        color: C.black
      },
      headline: {
        x: padX,
        y: headlineY,
        w: blockW,
        h: blockH,
        pad: headPad,
        size: fitted.size,
        baseSize: headBase,
        lineH: headLineH,
        lines: headLines,
        maxWidth: headMaxW,
        maxLines: 3,
        longestWordWidth
      },
      program: {
        lines: programLines,
        x: padX,
        y: programY,
        size: programSize,
        color: poster ? C.black : C.inkSecondary
      },
      date: {
        text: campaign.date,
        x: padX,
        y: dateY,
        size: dateSize,
        width: dateWidth,
        maxWidth: headMaxW,
        color: C.black
      },
      photo: { cx: photoCX, cy: photoCY, r: photoR },
      speaker: {
        nameLines,
        credsLines,
        nameX: photoCX,
        nameY,
        credsY,
        nameSize,
        credsSize,
        align: 'center',
        maxWidth: nameMaxW,
        color: poster ? C.white : C.black,
        credsColor: poster ? 'rgba(255, 255, 255, 0.78)' : C.inkSecondary
      },
      speakerName: campaign.speaker,
      pill: {
        text: pillText,
        x: padX,
        y: pillTop,
        w: pillW,
        h: pillH,
        size: pillSize,
        bg: poster ? C.pill : C.orange,
        fg: C.black
      },
      price: {
        text: campaign.price,
        x: padX,
        baseline: priceBase,
        size: priceSize,
        align: 'left',
        color: poster ? C.white : C.black,
        width: priceWidth,
        maxWidth: priceMaxW,
        fits: priceFits
      },
      logo: { x: w - padX - logoW, y: Math.round(h * 0.07), w: logoW },
      safe: { x: Math.round(w * 0.05), y: Math.round(h * 0.05), label: '5% безопасное поле' },
      lenses: { cx: photoCX, cy: photoCY, r: Math.round(w * 0.2) }
    };
  }

  function buildLayout(campaign, formatId) {
    const fmt = getFormat(formatId);
    const ctx = measuring();
    if (fmt.id === '16:9') return buildLandscapeLayout(campaign, fmt, ctx);
    return buildVerticalLayout(campaign, fmt, VERTICAL[fmt.id], ctx);
  }

  function drawPosterContent(ctx, layout, assets) {
    const { w, h, series } = layout;
    drawHairlines(ctx, w, h, series, layout.formatId);
    drawLenses(ctx, layout.lenses.cx, layout.lenses.cy, layout.lenses.r, Math.max(2, Math.round(w * 0.0032)));

    ctx.save();
    ctx.font = font(700, layout.kicker.size);
    ctx.fillStyle = layout.kicker.color;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    setTracking(ctx, layout.kicker.size * 0.08);
    ctx.fillText(String(layout.kicker.text || '').toUpperCase(), layout.kicker.x, layout.kicker.y);
    clearTracking(ctx);
    ctx.restore();

    const headline = layout.headline;
    ctx.fillStyle = C.black;
    ctx.fillRect(headline.x, headline.y, headline.w, headline.h);
    ctx.save();
    ctx.font = font(900, headline.size);
    ctx.fillStyle = C.white;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    headline.lines.forEach((line, index) => {
      ctx.fillText(line, headline.x + headline.pad, headline.y + headline.pad + headline.size * 0.82 + index * headline.lineH);
    });
    ctx.restore();

    drawTextLines(
      ctx,
      layout.program.lines,
      layout.program.x,
      layout.program.y + layout.program.size * 0.82,
      layout.program.size,
      1.25,
      400,
      layout.program.color,
      'left'
    );

    ctx.save();
    ctx.font = font(700, layout.date.size);
    ctx.fillStyle = layout.date.color;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(layout.date.text, layout.date.x, layout.date.y);
    ctx.restore();

    drawPhotoCircle(ctx, layout, assets);

    const speaker = layout.speaker;
    drawTextLines(ctx, speaker.nameLines, speaker.nameX, speaker.nameY, speaker.nameSize, 1.05, 700, speaker.color, speaker.align);
    drawTextLines(ctx, speaker.credsLines, speaker.nameX, speaker.credsY, speaker.credsSize, 1.35, 400, speaker.credsColor, speaker.align);

    const pill = layout.pill;
    fillRoundRect(ctx, pill.x, pill.y, pill.w, pill.h, pill.h / 2, pill.bg);
    ctx.save();
    ctx.font = font(700, pill.size);
    ctx.fillStyle = pill.fg;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    setTracking(ctx, pill.size * 0.08);
    ctx.fillText(pill.text, pill.x + pill.w / 2, pill.y + pill.h / 2 + pill.size * 0.02);
    clearTracking(ctx);
    ctx.restore();

    const price = layout.price;
    ctx.save();
    ctx.font = font(900, price.size);
    ctx.fillStyle = price.color;
    ctx.textAlign = price.align;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(price.text, price.x, price.baseline);
    ctx.restore();

    if (assets.logoImg) {
      ctx.drawImage(assets.logoImg, layout.logo.x, layout.logo.y, layout.logo.w, layout.logo.w * 0.25);
    }
  }

  function renderPosterToCanvas(campaign, formatId, options) {
    const opts = options || {};
    const fmt = getFormat(formatId);
    const bleed = Math.max(0, Math.round(opts.bleedPx || 0));
    const canvas = document.createElement('canvas');
    canvas.width = fmt.w + bleed * 2;
    canvas.height = fmt.h + bleed * 2;
    const ctx = canvas.getContext('2d');
    const layout = buildLayout(campaign, formatId);
    drawBackground(ctx, canvas.width, canvas.height, layout.series);
    ctx.save();
    ctx.translate(bleed, bleed);
    drawPosterContent(ctx, layout, {
      photoImg: opts.photoImg || null,
      logoImg: opts.logoImg || null,
      grayscale: Boolean(opts.grayscale)
    });
    ctx.restore();
    return canvas;
  }

  function measurePoster(campaign, formatId) {
    const layout = buildLayout(campaign, formatId);
    const lines = layout.headline.lines;
    const lastLine = lines[lines.length - 1] || '';
    const speakerRight = layout.speaker.align === 'center'
      ? layout.speaker.nameX + layout.speaker.maxWidth / 2
      : layout.speaker.nameX + layout.speaker.maxWidth;
    const contentRight = Math.max(
      layout.headline.x + layout.headline.w,
      layout.pill.x + layout.pill.w,
      layout.price.x,
      speakerRight
    );
    const contentLeft = Math.min(
      layout.kicker.x,
      layout.headline.x,
      layout.program.x,
      layout.photo.cx - layout.photo.r,
      layout.logo.x
    );
    return {
      format: layout.fmt,
      series: layout.series,
      width: layout.w,
      height: layout.h,
      print: layout.print,
      lineCount: lines.length,
      maxLines: layout.headline.maxLines,
      lines,
      lastLine,
      lastLineWords: lastLine.trim() ? lastLine.trim().split(/\s+/).length : 0,
      headlineSize: layout.headline.size,
      headlineBaseSize: layout.headline.baseSize,
      headlineFittedRatio: layout.headline.size / layout.headline.baseSize,
      longestWordWidth: layout.headline.longestWordWidth,
      headlineTextWidth: layout.headline.w - layout.headline.pad * 2,
      priceFits: layout.price.fits,
      priceWidth: layout.price.width,
      priceMaxWidth: layout.price.maxWidth,
      dateWidth: layout.date.width,
      dateMaxWidth: layout.date.maxWidth,
      safe: layout.safe,
      contentLeft,
      contentRight,
      photoDiameter: layout.photo.r * 2
    };
  }

  function loadPosterImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('image-load'));
      image.src = src;
    });
  }

  function loadLogoSource(path) {
    return fetch(path, { credentials: 'same-origin' })
      .then(response => {
        if (!response.ok) throw new Error('logo-fetch');
        return response.blob();
      })
      .then(blob => URL.createObjectURL(blob));
  }

  function usePosterFontsReady() {
    const [ready, setReady] = useState(false);
    useEffect(() => {
      let active = true;
      if (!document.fonts) {
        setReady(true);
        return () => { active = false; };
      }
      Promise.all([
        document.fonts.load('900 64px Onest', 'УЗИ'),
        document.fonts.load('700 64px Onest', 'УЗИ'),
        document.fonts.load('400 32px Onest', 'УЗИ'),
        document.fonts.load('900 64px "Roboto Condensed"', 'УЗИ')
      ])
        .then(() => document.fonts.ready)
        .then(() => { if (active) setReady(true); })
        .catch(() => { if (active) setReady(true); });
      return () => { active = false; };
    }, []);
    return ready;
  }

  function PosterCanvas({ campaign, formatId, photo, grayscale, logoPath, className }) {
    const canvasRef = useRef(null);
    const fontsReady = usePosterFontsReady();
    const [photoImg, setPhotoImg] = useState(null);
    const [logoImg, setLogoImg] = useState(null);

    useEffect(() => {
      let active = true;
      if (!photo) {
        setPhotoImg(null);
        return () => { active = false; };
      }
      loadPosterImage(photo)
        .then(image => { if (active) setPhotoImg(image); })
        .catch(() => { if (active) setPhotoImg(null); });
      return () => { active = false; };
    }, [photo]);

    useEffect(() => {
      let active = true;
      let objectUrl = null;
      setLogoImg(null);
      loadLogoSource(logoPath)
        .then(url => {
          objectUrl = url;
          return loadPosterImage(url);
        })
        .catch(() => loadPosterImage(logoPath))
        .then(image => { if (active) setLogoImg(image); })
        .catch(() => { if (active) setLogoImg(null); });
      return () => {
        active = false;
        if (objectUrl) URL.revokeObjectURL(objectUrl);
      };
    }, [logoPath]);

    useEffect(() => {
      if (!fontsReady) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const fmt = getFormat(formatId);
      canvas.width = fmt.w;
      canvas.height = fmt.h;
      const ctx = canvas.getContext('2d');
      const layout = buildLayout(campaign, formatId);
      drawBackground(ctx, fmt.w, fmt.h, layout.series);
      drawPosterContent(ctx, layout, { photoImg, logoImg, grayscale });
    }, [campaign, formatId, photoImg, logoImg, grayscale, fontsReady]);

    const fmt = getFormat(formatId);
    const label = `Постер ${fmt.name}. ${campaign.title}. ${campaign.date}. ${campaign.price}.`;

    return <canvas ref={canvasRef} className={className} role="img" aria-label={label} />;
  }

  window.PosterCanvas = PosterCanvas;
  window.POSTER_FORMATS = FORMATS;
  window.getPosterFormat = getFormat;
  window.measurePoster = measurePoster;
  window.loadPosterImage = loadPosterImage;
  window.renderPosterToCanvas = renderPosterToCanvas;
  window.usePosterFontsReady = usePosterFontsReady;
})();
