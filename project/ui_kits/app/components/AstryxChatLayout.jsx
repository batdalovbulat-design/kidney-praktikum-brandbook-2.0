function AstryxChatLayout({ children, composer, emptyState, density = 'balanced' }) {
  const isEmpty = children == null || children === false || (Array.isArray(children) && children.length === 0);

  return (
    <div className="astryx-chat-layout" data-density={density}>
      <div className="astryx-chat-messages">
        {isEmpty ? <div className="astryx-chat-empty">{emptyState}</div> : children}
      </div>
      <div className="astryx-chat-dock">{composer}</div>
    </div>
  );
}

window.AstryxChatLayout = AstryxChatLayout;
