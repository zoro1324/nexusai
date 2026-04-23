import { useMemo, useState } from 'react'
import {
  Bot,
  Compass,
  Library,
  Menu,
  MessageSquare,
  PenSquare,
  Plus,
  Settings,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [composerValue, setComposerValue] = useState('')

  const conversations = useMemo(
    () => [
      'Landing page redesign brief',
      'Prompt patterns for product docs',
      'API response schema refactor',
      'Accessibility QA checklist',
    ],
    [],
  )

  const messages = useMemo(
    () => [
      {
        id: 1,
        role: 'user',
        content: 'What is the capital of France?',
      },
      {
        id: 2,
        role: 'assistant',
        content:
          'The capital of France is Paris. It is known for art, culture, and landmarks like the Eiffel Tower and the Louvre Museum.',
      },
    ],
    [],
  )

  const closeSidebar = () => setIsSidebarOpen(false)
  const openSidebar = () => setIsSidebarOpen(true)

  const handleComposerSubmit = (event) => {
    event.preventDefault()
    if (!composerValue.trim()) {
      return
    }
    setComposerValue('')
  }

  const handleComposerKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (!composerValue.trim()) {
        return
      }
      setComposerValue('')
    }
  }

  return (
    <div className="app-shell">
      <aside
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        aria-label="Chat navigation"
      >
        <div className="sidebar-top">
          <button type="button" className="icon-button" aria-label="Open menu">
            <Menu size={18} strokeWidth={2.1} />
          </button>
          <button type="button" className="profile-chip" aria-label="Account menu">
            ChatGPT
          </button>
          <button
            type="button"
            className="icon-button mobile-close"
            aria-label="Close menu"
            onClick={closeSidebar}
          >
            <X size={18} strokeWidth={2.1} />
          </button>
        </div>

        <button type="button" className="new-chat">
          <Plus size={16} strokeWidth={2.2} />
          <span>New chat</span>
        </button>

        <nav className="nav-section" aria-label="Primary navigation">
          <button type="button" className="nav-item active">
            <MessageSquare size={16} strokeWidth={2.1} />
            <span>Chats</span>
          </button>
          <button type="button" className="nav-item">
            <Compass size={16} strokeWidth={2.1} />
            <span>Explore GPTs</span>
          </button>
          <button type="button" className="nav-item">
            <Library size={16} strokeWidth={2.1} />
            <span>Library</span>
          </button>
        </nav>

        <div className="conversation-scroll" aria-label="Recent conversations">
          {conversations.map((item) => (
            <button type="button" className="conversation-item" key={item}>
              <PenSquare size={15} strokeWidth={2.05} />
              <span>{item}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <button type="button" className="nav-item">
            <Settings size={16} strokeWidth={2.1} />
            <span>Settings</span>
          </button>
          <button type="button" className="profile-row">
            <span className="avatar-dot" aria-hidden="true">
              A
            </span>
            <span>Alex</span>
          </button>
        </div>
      </aside>

      <button
        type="button"
        className={`sidebar-overlay ${isSidebarOpen ? 'visible' : ''}`}
        aria-label="Close sidebar overlay"
        onClick={closeSidebar}
      />

      <main className="chat-main" aria-label="Conversation workspace">
        <header className="chat-header">
          <button
            type="button"
            className="icon-button mobile-only"
            aria-label="Open sidebar"
            onClick={openSidebar}
          >
            <Menu size={18} strokeWidth={2.1} />
          </button>
          <div className="title-row">
            <Sparkles size={16} strokeWidth={2.1} />
            <h1>ChatGPT</h1>
          </div>
          <button type="button" className="icon-button" aria-label="Start a new chat">
            <PenSquare size={17} strokeWidth={2.05} />
          </button>
        </header>

        <section className="message-list" aria-label="Messages">
          {messages.map((message) => (
            <article className={`message ${message.role}`} key={message.id}>
              <div className="message-avatar" aria-hidden="true">
                {message.role === 'assistant' ? <Bot size={16} /> : 'A'}
              </div>
              <div className="message-bubble">{message.content}</div>
            </article>
          ))}
        </section>

        <footer className="composer-wrap">
          <form className="composer" onSubmit={handleComposerSubmit}>
            <label className="sr-only" htmlFor="chat-composer">
              Message ChatGPT
            </label>
            <textarea
              id="chat-composer"
              value={composerValue}
              onChange={(event) => setComposerValue(event.target.value)}
              onKeyDown={handleComposerKeyDown}
              rows={1}
              placeholder="Message ChatGPT"
            />
            <button
              type="submit"
              className="send-button"
              aria-label="Send message"
              disabled={!composerValue.trim()}
            >
              <span aria-hidden="true">↑</span>
            </button>
          </form>
          <p className="composer-note">
            Press Enter to send. Shift + Enter for a new line.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
