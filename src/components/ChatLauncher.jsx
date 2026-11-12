import { useState } from 'react';
export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="chat-launcher"
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <i className={`bx ${open ? 'bx-x' : 'bx-chat'}`} aria-hidden="true" />
      </button>
      {open && (
        <div role="dialog" aria-label="Customer chat" style={{
          position:'fixed', right:20, bottom:88, width:'min(360px, calc(100vw - 40px))',
          background:'#fff', border:'1px solid var(--c-border)', padding:'var(--s-5)', zIndex:500
        }}>
          <h4>Chat with EnableMining</h4>
          <p style={{ color:'var(--c-text-secondary)', fontSize:'.9rem' }}>
            Real-time chat is connected in production. This is the accessible launcher component.
          </p>
        </div>
      )}
    </>
  );
}