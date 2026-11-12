
import { useEffect, useRef, useState } from 'react';

const questions = [
  {
    key: 'name',
    question: "Hello! 👋 Welcome to EnableMining. I'm here to help you connect with our team. First, may I know your name?",
    placeholder: 'Enter your full name',
    type: 'text',
  },
  {
    key: 'email',
    question: "Nice to meet you! What's the best email address to reach you?",
    placeholder: 'you@example.com',
    type: 'email',
  },
  {
    key: 'phone',
    question: "Great! Could you share your phone number so our team can contact you if needed?",
    placeholder: '+61 400 000 000',
    type: 'tel',
  },
  {
    key: 'message',
    question: "Thanks! Finally, how can EnableMining help you? Tell us a little about your requirements, project or enquiry.",
    placeholder: 'Write your message here...',
    type: 'textarea',
  },
];

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const currentQuestion = questions[step];

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          sender: 'bot',
          text: questions[0].question,
        },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  useEffect(() => {
    if (open && !submitted) {
      inputRef.current?.focus();
    }
  }, [open, step, submitted]);

  const validate = () => {
    const answer = value.trim();

    if (!answer) {
      setError('Please enter your response.');
      return false;
    }

    if (step === 0 && answer.length < 2) {
      setError('Please enter your full name.');
      return false;
    }

    if (
      step === 1 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer)
    ) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (
      step === 2 &&
      !/^[+()\d\s.-]{7,20}$/.test(answer)
    ) {
      setError('Please enter a valid phone number.');
      return false;
    }

    if (step === 3 && answer.length < 10) {
      setError('Please provide a little more detail (at least 10 characters).');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const answer = value.trim();
    const currentKey = currentQuestion.key;

    setAnswers((previous) => ({
      ...previous,
      [currentKey]: answer,
    }));

    setMessages((previous) => [
      ...previous,
      {
        sender: 'user',
        text: answer,
      },
    ]);

    setValue('');

    if (step < questions.length - 1) {
      const nextStep = step + 1;

      setStep(nextStep);

      setTimeout(() => {
        setMessages((previous) => [
          ...previous,
          {
            sender: 'bot',
            text: questions[nextStep].question,
          },
        ]);
      }, 350);
    } else {
      setSubmitted(true);

      setTimeout(() => {
        setMessages((previous) => [
          ...previous,
          {
            sender: 'bot',
            text: `Thank you, ${answers.name || 'there'}! Your enquiry details are ready. Please use the button below to send them to our team. We appreciate your interest in EnableMining. 😊`,
          },
        ]);
      }, 350);
    }
  };

  const sendEnquiry = () => {
    const enquiry = [
      'New Website Enquiry - EnableMining',
      '',
      `Name: ${answers.name}`,
      `Email: ${answers.email}`,
      `Phone: ${answers.phone}`,
      '',
      'Message:',
      answers.message,
    ].join('\n');

    const subject = encodeURIComponent(
      'New Website Enquiry - EnableMining'
    );

    const body = encodeURIComponent(enquiry);

    window.location.href =
      `mailto:nitin.bordia@enablemining.com?subject=${subject}&body=${body}`;
  };

  const restartChat = () => {
    setStep(0);
    setValue('');
    setError('');
    setSubmitted(false);
    setAnswers({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setMessages([
      {
        sender: 'bot',
        text: questions[0].question,
      },
    ]);
  };

  return (
    <>
      <button
        className="chat-launcher"
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
      >
        <i
          className={`bx ${open ? 'bx-x' : 'bx-chat'}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Chat with EnableMining"
          aria-modal="false"
          style={{
            position: 'fixed',
            right: 20,
            bottom: 88,
            width: 'min(380px, calc(100vw - 40px))',
            height: 'min(540px, calc(100dvh - 115px))',
            background: '#fff',
            border: '1px solid var(--c-border)',
            borderRadius: '16px',
            boxShadow: '0 12px 45px rgba(0,0,0,.18)',
            zIndex: 500,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            color: '#202a35',
          }}
        >

          {/* Chat Header */}

          <div
            style={{
              padding: '17px 20px',
              background: '#102b46',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <strong style={{ fontSize: '1rem' }}>
                EnableMining
              </strong>

              <div
                style={{
                  fontSize: '.75rem',
                  opacity: .8,
                  marginTop: 4,
                }}
              >
                <span style={{ color: '#67d99b' }}>●</span>
                {' '}Enquiry Assistant
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: 'transparent',
                border: 0,
                color: '#fff',
                fontSize: '1.4rem',
                cursor: 'pointer',
              }}
            >
              <i className="bx bx-x" />
            </button>
          </div>

          {/* Progress */}

          {!submitted && (
            <div
              style={{
                padding: '12px 18px 8px',
                borderBottom: '1px solid #edf0f2',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '.72rem',
                  color: '#64748b',
                  marginBottom: 7,
                }}
              >
                <span>Getting to know you</span>
                <span>{step + 1} of 4</span>
              </div>

              <div
                style={{
                  height: 4,
                  background: '#e8edf2',
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${((step + 1) / 4) * 100}%`,
                    background: '#b68a4a',
                    transition: 'width .3s ease',
                  }}
                />
              </div>
            </div>
          )}

          {/* Messages */}

          <div
            aria-live="polite"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 13,
              background: '#f7f9fb',
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  alignSelf:
                    message.sender === 'user'
                      ? 'flex-end'
                      : 'flex-start',
                  maxWidth: '88%',
                  padding: '11px 14px',
                  borderRadius:
                    message.sender === 'user'
                      ? '14px 14px 3px 14px'
                      : '14px 14px 14px 3px',
                  background:
                    message.sender === 'user'
                      ? '#173c5c'
                      : '#fff',
                  color:
                    message.sender === 'user'
                      ? '#fff'
                      : '#253447',
                  fontSize: '.88rem',
                  lineHeight: 1.6,
                  border:
                    message.sender === 'bot'
                      ? '1px solid #e9edf1'
                      : 'none',
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'anywhere',
                }}
              >
                {message.text}
              </div>
            ))}

            {submitted && (
              <div
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <button
                  onClick={sendEnquiry}
                  style={{
                    width: '100%',
                    padding: 13,
                    border: 0,
                    borderRadius: 8,
                    background: '#b68a4a',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <i className="bx bx-envelope" />
                  {' '}Send enquiry to EnableMining
                </button>

                <button
                  onClick={restartChat}
                  style={{
                    marginTop: 12,
                    background: 'transparent',
                    border: 0,
                    color: '#64748b',
                    cursor: 'pointer',
                    fontSize: '.8rem',
                  }}
                >
                  Start a new conversation
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}

          {!submitted && (
            <form
              onSubmit={handleSubmit}
              style={{
                padding: 14,
                background: '#fff',
                borderTop: '1px solid #e9edf1',
              }}
            >
              {currentQuestion.type === 'textarea' ? (
                <textarea
                  ref={inputRef}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    setError('');
                  }}
                  placeholder={currentQuestion.placeholder}
                  rows={3}
                  style={{
                    width: '100%',
                    resize: 'none',
                    padding: 12,
                    border: '1px solid #dce2e8',
                    borderRadius: 8,
                    outlineColor: '#b68a4a',
                    font: 'inherit',
                    fontSize: '.85rem',
                    boxSizing: 'border-box',
                  }}
                />
              ) : (
                <input
                  ref={inputRef}
                  type={currentQuestion.type}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    setError('');
                  }}
                  placeholder={currentQuestion.placeholder}
                  autoComplete={
                    step === 0
                      ? 'name'
                      : step === 1
                        ? 'email'
                        : 'tel'
                  }
                  style={{
                    width: '100%',
                    padding: 12,
                    border: '1px solid #dce2e8',
                    borderRadius: 8,
                    outlineColor: '#b68a4a',
                    font: 'inherit',
                    fontSize: '.85rem',
                    boxSizing: 'border-box',
                  }}
                />
              )}

              {error && (
                <p
                  role="alert"
                  style={{
                    color: '#c0392b',
                    fontSize: '.75rem',
                    margin: '6px 0',
                  }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                style={{
                  width: '100%',
                  marginTop: 9,
                  padding: 12,
                  border: 0,
                  borderRadius: 8,
                  background: '#173c5c',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {step === 3 ? 'Finish conversation' : 'Continue'}
                {' '}
                <i className="bx bx-right-arrow-alt" />
              </button>

              <p
                style={{
                  textAlign: 'center',
                  fontSize: '.68rem',
                  color: '#8995a3',
                  margin: '9px 0 0',
                }}
              >
                Your details will be used to respond to your enquiry.
              </p>
            </form>
          )}

        </div>
      )}
    </>
  );
}
