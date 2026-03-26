import React, { useState, useCallback } from 'react';
import './Survey.css';

// Replace with your real endpoint (e.g. a Formspree, Airtable, or your own API)
const SUBMIT_URL = 'https://your-api-endpoint.com/leads';

const TOTAL = 11;

const QUESTIONS = [
  { id: 1, type: 'text',       title: "Hey! What's your first name?",                          hint: 'We like to keep things personal 😊' },
  { id: 2, type: 'single',     title: 'Where are you based?',                                  hint: 'Helps us plan our delivery zones.',
    options: ['📍 Leicester City Centre', '📍 Leicester suburbs', '📍 Outside Leicester — but I\'m interested!'] },
  { id: 3, type: 'single',     title: 'Which best describes you?',                              hint: 'No wrong answer here.',
    options: ['🍳 I cook regularly at home', '🥘 I cook sometimes', '🛒 I mostly buy ready-made but still shop for basics'] },
  { id: 4, type: 'single',     title: 'How often do you buy groceries?',                        hint: 'Your typical pattern, not your ideal one.',
    options: ['Every day or every other day', '2–3 times a week', 'Once a week', 'Less often than that'] },
  { id: 5, type: 'multi',      title: "What's your biggest grocery headache?",                  hint: 'Pick up to 2 that feel most true.', max: 2,
    options: ['⏰ Never enough time to shop', '💪 Carrying heavy bags is exhausting', '💸 Prices keep changing and I can\'t keep track', '🌍 Hard to find specific ingredients (African, Asian, Caribbean etc.)', '🚌 The shops I need are far from me'] },
  { id: 6, type: 'scale',      title: 'How much of a hassle is grocery shopping in your week?', hint: 'Be honest!',
    scaleLeft: 'Barely an issue', scaleRight: 'Real hassle' },
  { id: 7, type: 'statement',  title: '💡 Here\'s what we\'re building...',                     hint: 'Take a moment to read this.' },
  { id: 8, type: 'scale',      title: 'How likely are you to use something like this?',         hint: '1 = not really my thing → 10 = sign me up right now',
    scaleLeft: 'Not for me', scaleRight: 'Sign me up' },
  { id: 9, type: 'single',     title: 'We charge a small fee on top of your grocery cost. What feels fair?', hint: 'This covers the shopper and delivery.',
    options: ['✅ £2–£3 service fee + delivery — that\'s reasonable', '✅ £4–£5 service fee + delivery — fine if the service is good', '🤔 Depends on how much I save overall', '❌ I\'d only use it if it was completely free'] },
  { id: 10, type: 'single',    title: 'Which delivery option would you use most?',              hint: 'Be honest — this helps us plan.',
    options: ['⚡ Same-day delivery — I need it fast', '📦 Next-day delivery — cheaper works for me', '🔄 Either, depending on the week'] },
  { id: 11, type: 'email',     title: 'Want to be first in line when we launch?',               hint: 'Drop your email for a personal early access invite. No spam, ever. Totally optional.' },
];

/* ── Sub-components ── */

function ChoiceBtn({ label, selected, onClick }) {
  return (
    <button
      className={`survey__choice ${selected ? 'survey__choice--selected' : ''}`}
      onClick={onClick}
    >
      <span className="survey__choice-check">✓</span>
      {label}
    </button>
  );
}

function ScaleBtn({ value, selected, onClick }) {
  return (
    <button
      className={`survey__scale-num ${selected ? 'survey__scale-num--selected' : ''}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

function StatementCard() {
  return (
    <div className="survey__statement">
      <p>You tell us what you need — rice, peppers, stockfish, plantain, whatever.</p>
      <p>We go to the market, buy it fresh at the best price, and deliver it to your door — same day or next day.</p>
      <p>You top up a wallet. We deduct the exact cost after shopping. <strong className="survey__highlight">No surprises.</strong></p>
    </div>
  );
}

function ThankYou({ name }) {
  return (
    <div className="survey__thankyou">
      <div className="survey__ty-circle">🎉</div>
      <h2>You're a legend{name ? `, ${name}` : ''}! 🙌</h2>
      <p>
        Thank you for helping shape Sukoya. If you left your email, you'll hear
        from us personally before we launch. Keep an eye out. 👀
      </p>
    </div>
  );
}

/* ── Main Survey Component ── */

export default function Survey() {
  const [current, setCurrent] = useState(1);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState({});
  const [multiSel, setMultiSel] = useState({});
  const [textVal, setTextVal] = useState('');
  const [emailVal, setEmailVal] = useState('');

  const q = QUESTIONS[current - 1];
  const pct = Math.round(((current - 1) / TOTAL) * 100);

  const personalTitle = useCallback((title) => {
    const name = answers.name || '';
    if (!name) return title;
    if (current === 2) return `Where are you based, ${name}?`;
    if (current === 8) return `Honestly ${name} — how likely are you to use something like this?`;
    return title;
  }, [answers.name, current]);

  const canProceed = useCallback(() => {
    if (q.type === 'text')  return textVal.trim().length > 0;
    if (q.type === 'email') return true;
    if (q.type === 'statement') return true;
    if (q.type === 'single') return !!answers[`q${current}`];
    if (q.type === 'multi')  return (multiSel[`q${current}`] || []).length > 0;
    if (q.type === 'scale')  return answers[`q${current}`] !== undefined;
    return false;
  }, [q, textVal, answers, multiSel, current]);

  const handleNext = () => {
    let latestAnswers = answers;
    if (q.type === 'text')  { latestAnswers = { ...answers, name: textVal.trim() }; setAnswers(latestAnswers); }
    if (q.type === 'email') { latestAnswers = { ...answers, email: emailVal.trim() }; setAnswers(latestAnswers); }

    if (current === TOTAL) {
      const raw = { ...latestAnswers, email: emailVal.trim() };

      const payload = {
        submittedAt:      new Date().toISOString(),
        source:           'sukoya-leads-page',
        name:             raw.name             || null,
        email:            raw.email            || null,
        location:         raw.q2               || null,
        cookingHabit:     raw.q3               || null,
        groceryFrequency: raw.q4               || null,
        painPoints:       raw.q5               || null,
        hassleScore:      raw.q6               ?? null,
        likelihoodScore:  raw.q8               ?? null,
        feePref:          raw.q9               || null,
        deliveryPref:     raw.q10              || null,
      };

      // Persist locally so submissions are never lost
      try {
        const saved = JSON.parse(localStorage.getItem('sukoya_leads') || '[]');
        saved.push(payload);
        localStorage.setItem('sukoya_leads', JSON.stringify(saved, null, 2));
      } catch (_) {}

      // POST to configured endpoint
      fetch(SUBMIT_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      }).catch(() => {
        // Submission saved to localStorage; endpoint can be synced later
      });

      setDone(true);
    } else {
      setCurrent(c => c + 1);
      setTextVal('');
    }
  };

  const pickSingle = (opt) => {
    setAnswers(a => ({ ...a, [`q${current}`]: opt }));
  };

  const pickMulti = (opt) => {
    const key = `q${current}`;
    const prev = multiSel[key] || [];
    let next;
    if (prev.includes(opt)) {
      next = prev.filter(v => v !== opt);
    } else if (prev.length >= q.max) {
      next = [...prev.slice(1), opt];
    } else {
      next = [...prev, opt];
    }
    setMultiSel(m => ({ ...m, [key]: next }));
    setAnswers(a => ({ ...a, [key]: next.join(' | ') }));
  };

  const pickScale = (val) => {
    setAnswers(a => ({ ...a, [`q${current}`]: val }));
  };

  return (
    <section className="survey" id="survey">
      <div className="survey__inner">
        <p className="survey__eyebrow">Help us build this</p>
        <h2 className="survey__title">
          Shape how Sukoya<br />launches in Leicester
        </h2>
        <p className="survey__sub">
          2 minutes. Your answers directly influence how we launch and what we prioritise first.
        </p>

        {/* Progress */}
        <div className="survey__progress-track">
          <div
            className="survey__progress-fill"
            style={{ width: done ? '100%' : `${pct}%` }}
          />
        </div>
        <div className="survey__progress-meta">
          <span>{done ? 'Complete!' : `Question ${current} of ${TOTAL}`}</span>
          <span>{done ? '100%' : `${pct}%`}</span>
        </div>

        {/* Done state */}
        {done ? (
          <ThankYou name={answers.name} />
        ) : (
          <div className="survey__card" key={current}>
            <h3 className="survey__q-title">{personalTitle(q.title)}</h3>
            <p className="survey__q-hint">{q.hint}</p>

            {/* TEXT */}
            {q.type === 'text' && (
              <input
                className="survey__text-input"
                type="text"
                placeholder="Your first name..."
                value={textVal}
                onChange={e => setTextVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && canProceed() && handleNext()}
                autoFocus
              />
            )}

            {/* EMAIL */}
            {q.type === 'email' && (
              <input
                className="survey__text-input"
                type="email"
                placeholder="your@email.com (optional)"
                value={emailVal}
                onChange={e => setEmailVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleNext()}
              />
            )}

            {/* SINGLE CHOICE */}
            {q.type === 'single' && (
              <div className="survey__choices">
                {q.options.map(opt => (
                  <ChoiceBtn
                    key={opt}
                    label={opt}
                    selected={answers[`q${current}`] === opt}
                    onClick={() => pickSingle(opt)}
                  />
                ))}
              </div>
            )}

            {/* MULTI CHOICE */}
            {q.type === 'multi' && (
              <div className="survey__choices">
                {q.options.map(opt => (
                  <ChoiceBtn
                    key={opt}
                    label={opt}
                    selected={(multiSel[`q${current}`] || []).includes(opt)}
                    onClick={() => pickMulti(opt)}
                  />
                ))}
              </div>
            )}

            {/* SCALE */}
            {q.type === 'scale' && (
              <div className="survey__scale-wrap">
                <div className="survey__scale-row">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(v => (
                    <ScaleBtn
                      key={v}
                      value={v}
                      selected={answers[`q${current}`] === v}
                      onClick={pickScale}
                    />
                  ))}
                </div>
                <div className="survey__scale-ends">
                  <span>{q.scaleLeft}</span>
                  <span>{q.scaleRight}</span>
                </div>
              </div>
            )}

            {/* STATEMENT */}
            {q.type === 'statement' && <StatementCard />}

            {/* NEXT */}
            <button
              className="survey__next-btn"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              {current === TOTAL ? 'Submit & get early access' : q.type === 'statement' ? "Okay, I'm listening" : 'Continue'}
              <span className="survey__next-arrow">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
