function ChatArea({ onSelect }) {
  return (
    <main id="content" tabIndex={-1}>
      <Hero />
      <AssistantsList onSelect={onSelect} />
      <AstryxFormsGallery />
      <AstryxWorkspace variant="dual" />
      <AstryxDataViews />
      <PosterStudio />
      <AstryxDensity>
          <AstryxPatternLibrary />
      </AstryxDensity>
      <Stats />
      <MessageBubble />
    </main>
  );
}

window.ChatArea = ChatArea;
