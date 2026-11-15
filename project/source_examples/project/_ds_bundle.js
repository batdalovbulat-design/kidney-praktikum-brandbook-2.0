/* @ds-bundle: {"format":4,"namespace":"DesignSystem_019e02","components":[],"sourceHashes":{"ui_kits/landing/CourseGrid.jsx":"b27e91a42564","ui_kits/landing/EnrollForm.jsx":"4c82c86a8bdd","ui_kits/landing/Hero.jsx":"3f55b6d166ab","ui_kits/landing/SiteFooter.jsx":"6f812b665f34","ui_kits/landing/SiteHeader.jsx":"e3acbb56a1bb","ui_kits/landing/SpeakersBlock.jsx":"00ba906fe0f4","ui_kits/landing/Stats.jsx":"c7fbc5f5e4fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_019e02 = window.DesignSystem_019e02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/landing/CourseGrid.jsx
try { (() => {
/* global React */
function CourseCard({
  eyebrow,
  title,
  date,
  price,
  color = '#fff'
}) {
  const onOrange = color === '#F39C12';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: color,
      padding: 32,
      position: 'relative',
      overflow: 'hidden',
      border: color === '#fff' ? '1px solid rgba(0,0,0,.08)' : 'none',
      minHeight: 360,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: onOrange ? '#000' : '#333',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1.05,
      textTransform: 'uppercase',
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      color: '#333',
      letterSpacing: '0.04em'
    }
  }, "\u0421\u0442\u0430\u0440\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700
    }
  }, date)), price && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1E3A8A',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: 999,
      fontWeight: 700,
      fontSize: 15
    }
  }, price)));
}
function CourseGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 64px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 48,
      fontWeight: 700,
      textTransform: 'uppercase',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: '#000',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u0412\u0441\u0435 \u043A\u0443\u0440\u0441\u044B", /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "10",
    viewBox: "0 0 32 10"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "5",
    x2: "26",
    y2: "5",
    stroke: "#000",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,1 26,5 22,9",
    fill: "none",
    stroke: "#000",
    strokeWidth: "1.5"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(CourseCard, {
    eyebrow: "\u0414\u0432\u0443\u0445\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441",
    title: "\u0412\u0430\u043A\u0446\u0438\u043D\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u043A\u0430",
    date: "24 \u0438\u044E\u043B\u044F",
    price: "22 500 \u20BD",
    color: "#F5EFE6"
  }), /*#__PURE__*/React.createElement(CourseCard, {
    eyebrow: "\u0426\u0438\u043A\u043B \u043B\u0435\u043A\u0446\u0438\u0439",
    title: "\u041D\u0435\u0439\u0440\u043E\u0441\u043E\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
    date: "12 \u0430\u0432\u0433\u0443\u0441\u0442\u0430",
    price: "15 000 \u20BD",
    color: "#F39C12"
  }), /*#__PURE__*/React.createElement(CourseCard, {
    eyebrow: "\u041A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u044F",
    title: "\u041F\u043E\u0447\u043A\u0430 \u0438 \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044F",
    date: "26\u201427 \u0430\u0432\u0433\u0443\u0441\u0442\u0430",
    price: "\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
    color: "#fff"
  }))));
}
window.CourseCard = CourseCard;
window.CourseGrid = CourseGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CourseGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/EnrollForm.jsx
try { (() => {
/* global React */
const {
  useState: useEnrollState
} = React;
function EnrollForm() {
  const [step, setStep] = useEnrollState(0);
  const [name, setName] = useEnrollState('');
  const [phone, setPhone] = useEnrollState('');
  const [spec, setSpec] = useEnrollState('Педиатр');
  if (step === 1) {
    return /*#__PURE__*/React.createElement("section", {
      id: "enroll",
      style: {
        padding: '96px 64px',
        background: '#000',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: '#F39C12',
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 64,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 1,
        letterSpacing: '-0.02em',
        margin: 0
      }
    }, "\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F", /*#__PURE__*/React.createElement("br", null), "\u0441 \u0432\u0430\u043C\u0438", ' ', /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#F39C12'
      }
    }, "\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043D\u044F")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        marginTop: 24,
        color: '#ccc',
        lineHeight: 1.5
      }
    }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, ", name.split(' ')[0] || 'коллега', ". \u041A\u0443\u0440\u0430\u0442\u043E\u0440 \u043A\u0443\u0440\u0441\u0430 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442 \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 ", phone || '+7', " \u0438 \u043F\u0440\u0438\u0448\u043B\u0451\u0442 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443."), /*#__PURE__*/React.createElement("button", {
      onClick: () => setStep(0),
      style: {
        marginTop: 32,
        background: 'transparent',
        border: '1.5px solid #fff',
        color: '#fff',
        padding: '14px 28px',
        fontWeight: 700,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        cursor: 'pointer'
      }
    }, "\u041F\u043E\u0434\u0430\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")));
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "enroll",
    style: {
      padding: '96px 64px',
      background: '#000',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#F39C12',
      marginBottom: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 72,
      fontWeight: 900,
      textTransform: 'uppercase',
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "\u041F\u043E\u0434\u0430\u0439\u0442\u0435", /*#__PURE__*/React.createElement("br", null), "\u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: '#bbb',
      marginTop: 24,
      lineHeight: 1.5,
      maxWidth: 400
    }
  }, "\u041A\u0443\u0440\u0430\u0442\u043E\u0440 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442, \u043F\u0440\u0438\u0448\u043B\u0451\u0442 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0438 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B. \u0411\u0435\u0437 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u043D\u0430\u0432\u044F\u0437\u044B\u0432\u0430\u043D\u0438\u044F."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: '#777',
      marginTop: 32,
      lineHeight: 1.5,
      maxWidth: 400
    }
  }, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u041C\u0438\u043D\u043E\u0431\u0440\u043D\u0430\u0443\u043A\u0438 \u0420\u0414 \u2116 \u041B035-01227-05/00665847. \u0414\u0438\u043F\u043B\u043E\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0432 \u0424\u0418\u0421 \u0424\u0420\u0414\u041E.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setStep(1);
    },
    style: {
      display: 'grid',
      gap: 24
    }
  }, [['ФИО', 'name', 'Магомедова Мадина Гусейновна', name, setName], ['Телефон', 'tel', '+7 ___ ___ __ __', phone, setPhone]].map(([lbl, t, ph, v, set]) => /*#__PURE__*/React.createElement("label", {
    key: lbl,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 700,
      marginBottom: 8
    }
  }, lbl), /*#__PURE__*/React.createElement("input", {
    type: t,
    placeholder: ph,
    value: v,
    onChange: e => set(e.target.value),
    style: {
      width: '100%',
      background: 'transparent',
      border: 0,
      borderBottom: '1.5px solid #fff',
      color: '#fff',
      fontFamily: 'inherit',
      fontSize: 18,
      padding: '10px 0',
      outline: 'none'
    }
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("select", {
    value: spec,
    onChange: e => setSpec(e.target.value),
    style: {
      width: '100%',
      background: 'transparent',
      border: 0,
      borderBottom: '1.5px solid #fff',
      color: '#fff',
      fontFamily: 'inherit',
      fontSize: 18,
      padding: '10px 0',
      outline: 'none'
    }
  }, ['Педиатр', 'УЗД-врач', 'Вакцинолог', 'Другое'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    style: {
      color: '#000'
    }
  }, o)))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: '#F39C12',
      color: '#000',
      border: 0,
      padding: '18px 36px',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 15,
      letterSpacing: '0.04em',
      cursor: 'pointer',
      justifySelf: 'start',
      marginTop: 8
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
}
window.EnrollForm = EnrollForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/EnrollForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* global React */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 64px 120px',
      background: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 20% 60%, rgba(243,156,18,.18), transparent 50%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      marginBottom: 16,
      color: '#333'
    }
  }, "\u041F\u0435\u0440\u0432\u0438\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 96,
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      margin: 0,
      color: '#000'
    }
  }, "\u0423\u043B\u044C\u0442\u0440\u0430\u0437\u0432\u0443\u043A\u043E\u0432\u0430\u044F", /*#__PURE__*/React.createElement("br", null), "\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: '#333',
      maxWidth: 520,
      marginTop: 24,
      lineHeight: 1.5
    }
  }, "576 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0447\u0430\u0441\u043E\u0432. \u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430. \u0414\u0438\u043F\u043B\u043E\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0432 \u0424\u0418\u0421 \u0424\u0420\u0414\u041E."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#enroll",
    style: {
      background: '#000',
      color: '#fff',
      padding: '18px 36px',
      textDecoration: 'none',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 15,
      letterSpacing: '0.04em'
    }
  }, "\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#333'
    }
  }, "\u0421\u0442\u0430\u0440\u0442 \u0446\u0438\u043A\u043B\u0430 \u2014 24 \u0438\u044E\u043B\u044F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      height: 340,
      borderRadius: '50%',
      border: '1.5px solid #000',
      background: 'linear-gradient(135deg,#d8d8d8,#9c9c9c)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -20,
      left: 0,
      width: 160,
      height: 120,
      borderRadius: '50%',
      background: '#1E3A8A',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 400
    }
  }, "\u0421\u0442\u0430\u0440\u0442"), "24 \u0438\u044E\u043B\u044F"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SiteFooter.jsx
try { (() => {
/* global React */
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '48px 64px',
      background: '#fff',
      borderTop: '1px solid rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo_main.svg",
    style: {
      height: 36
    },
    alt: "\u041A\u0438\u0434\u043D\u0435\u0439 \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: '#777',
      marginTop: 16,
      lineHeight: 1.5,
      maxWidth: 280
    }
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u0438 \u0434\u0435\u0442\u0441\u043A\u043E\u0439 \u043A\u043B\u0438\u043D\u0438\u043A\u0435 \u041A\u0438\u0434\u043D\u0435\u0439. \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430, \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043D.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777',
      textTransform: 'uppercase',
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"), ['УЗД', 'Вакцинопрофилактика', 'Конференция', 'Родителям'].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      display: 'block',
      fontSize: 14,
      color: '#000',
      textDecoration: 'none',
      padding: '4px 0'
    }
  }, x))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777',
      textTransform: 'uppercase',
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.7
    }
  }, "8 (8722) 55-77-27", /*#__PURE__*/React.createElement("br", null), "@kidney.practicum", /*#__PURE__*/React.createElement("br", null), "\u0433. \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777',
      textTransform: 'uppercase',
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777',
      lineHeight: 1.6
    }
  }, "\u041C\u0438\u043D\u043E\u0431\u0440\u043D\u0430\u0443\u043A\u0438 \u0420\u0414", /*#__PURE__*/React.createElement("br", null), "\u2116 \u041B035-01227-05/00665847", /*#__PURE__*/React.createElement("br", null), "\u0414\u0438\u043F\u043B\u043E\u043C \u2014 \u0424\u0418\u0421 \u0424\u0420\u0414\u041E"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SiteHeader.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
function SiteHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 64px',
      borderBottom: '1px solid rgba(0,0,0,.08)',
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none',
      color: '#000'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo_main.svg",
    style: {
      height: 32
    },
    alt: "\u041A\u0438\u0434\u043D\u0435\u0439 \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 40,
      fontSize: 15,
      fontWeight: 500
    }
  }, ['Курсы', 'Спикеры', 'Конференция', 'О нас'].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      color: '#000',
      textDecoration: 'none'
    }
  }, x))), /*#__PURE__*/React.createElement("a", {
    href: "#enroll",
    style: {
      background: '#000',
      color: '#fff',
      padding: '12px 24px',
      textDecoration: 'none',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 14,
      letterSpacing: '0.04em'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SpeakersBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
function SpeakerTile({
  name,
  role,
  inst,
  photo
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 24,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: '50%',
      border: '1.5px solid #000',
      background: photo || 'linear-gradient(135deg,#d6d6d6,#a0a0a0)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, "\u0441\u043F\u0438\u043A\u0435\u0440", /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "8",
    viewBox: "0 0 36 8"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "4",
    x2: "30",
    y2: "4",
    stroke: "#000",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "26,1 30,4 26,7",
    fill: "none",
    stroke: "#000",
    strokeWidth: "1.2"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: 1.05
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#333',
      marginTop: 8,
      lineHeight: 1.4
    }
  }, role, /*#__PURE__*/React.createElement("br", null), inst));
}
function SpeakersBlock() {
  const data = [{
    name: 'Пыков\nМихаил Иванович',
    role: 'Профессор, д.м.н.',
    inst: 'РМАНПО · автор учебника по детской УЗД'
  }, {
    name: 'Ольхова\nЕлена Борисовна',
    role: 'Профессор, д.м.н.',
    inst: 'МГМСУ им. А.И. Евдокимова'
  }, {
    name: 'Овсянников\nДмитрий Юрьевич',
    role: 'Педиатр, пульмонолог, д.м.н.',
    inst: 'РУДН'
  }, {
    name: 'Зайкова\nНаталья',
    role: 'Нефролог',
    inst: 'РНИМУ им. Н.И. Пирогова'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 64px',
      background: '#F5EFE6'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 48,
      fontWeight: 700,
      textTransform: 'uppercase',
      margin: '0 0 48px',
      letterSpacing: '-0.01em'
    }
  }, "\u0421\u043F\u0438\u043A\u0435\u0440\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0,
      background: '#000',
      border: '1px solid #000'
    }
  }, data.map((s, i) => /*#__PURE__*/React.createElement(SpeakerTile, _extends({
    key: i
  }, s))))));
}
window.SpeakersBlock = SpeakersBlock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SpeakersBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Stats.jsx
try { (() => {
/* global React */
function Stats() {
  const items = [['576', 'академических часов'], ['50+', 'мероприятий проведено'], ['2 000+', 'участников'], ['10', 'университетов-партнёров']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px',
      background: '#F5EFE6'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32
    }
  }, items.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      borderTop: '1.5px solid #000',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 8,
      textTransform: 'uppercase',
      color: '#333',
      letterSpacing: '0.02em'
    }
  }, l)))));
}
window.Stats = Stats;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Stats.jsx", error: String((e && e.message) || e) }); }

})();
