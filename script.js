// Quotes by feeling - at least 10 per feeling
const quotes = {
    heartbroken: [
        "Even surrounded, I feel unseen.",
        "Some wounds never show on the body, they are deeper.",
        "Pain is inevitable, suffering is optional.",
        "The heart breaks silently.",
        "Tears are words the heart cannot express.",
        "Missing someone is a heartache that never fades.",
        "Sometimes love hurts more than hate.",
        "Broken hearts still beat with hope.",
        "Loneliness teaches the soul resilience.",
        "Healing takes time, not words."
    ],
    calm: [
        "Peace comes from within, not from without.",
        "Breathe and let go.",
        "Stillness is the key to clarity.",
        "Calmness is a superpower.",
        "Tranquility is the essence of life.",
        "Meditation is silence speaking to your soul.",
        "Inner peace is unstoppable.",
        "A calm mind brings inner strength.",
        "Serenity is the art of living.",
        "Inhale peace, exhale stress."
    ],
    motivated: [
        "Push yourself because no one else will.",
        "Success is the sum of small efforts repeated.",
        "Dream big. Act bigger.",
        "The harder you work, the luckier you get.",
        "Motivation is the fuel to achieve greatness.",
        "Every step forward counts.",
        "Don’t wait for opportunity, create it.",
        "Action turns dreams into reality.",
        "Success comes to those who persist.",
        "Wake up with determination, sleep with satisfaction."
    ],
    lonely: [
        "Loneliness is the soul’s cry for connection.",
        "Sometimes solitude teaches you more than company.",
        "Being alone is a journey to self-discovery.",
        "Lonely nights bring reflection.",
        "You are enough, even alone.",
        "Embrace solitude, grow stronger.",
        "Loneliness sharpens your inner voice.",
        "Even in isolation, hope remains.",
        "Quiet moments are precious.",
        "Connection begins with self-love."
    ],
    happy: [
        "Happiness is homemade.",
        "Smile, it’s contagious.",
        "Joy is the simplest form of gratitude.",
        "Happiness grows when shared.",
        "Choose happiness every day.",
        "Dance like nobody’s watching.",
        "Laugh often, love always.",
        "Happiness is a state of mind.",
        "Celebrate small victories.",
        "Find joy in the ordinary."
    ],
    inspired: [
        "Be the change you wish to see.",
        "Dream big. Start small. Act now.",
        "Inspiration fuels action.",
        "Your potential is limitless.",
        "Every day is a blank canvas.",
        "Create, inspire, repeat.",
        "Courage is the spark of inspiration.",
        "The world needs your light.",
        "Innovation begins with imagination.",
        "Let your passion lead you."
    ],
    confused: [
        "Confusion is the first step toward clarity.",
        "Not knowing is the beginning of learning.",
        "Embrace uncertainty, it leads to growth.",
        "Confusion can spark new ideas.",
        "Even chaos has a pattern.",
        "Questions lead to understanding.",
        "Lost today, found tomorrow.",
        "Confusion is the path to wisdom.",
        "Seek answers, but enjoy the journey.",
        "The mind grows when it wonders."
    ],
    grateful: [
        "Gratitude turns what we have into enough.",
        "Start each day with a thankful heart.",
        "Appreciate the little things.",
        "Gratitude is a magnet for blessings.",
        "Say thank you often.",
        "Count your blessings daily.",
        "Grateful hearts attract joy.",
        "Cherish every moment.",
        "Recognize what is, and peace follows.",
        "Gratitude is the best attitude."
    ],
    excited: [
        "Life is short, live it excitedly!",
        "Every moment is a new adventure.",
        "Excitement fuels creativity.",
        "Feel the thrill of today.",
        "Embrace opportunities with enthusiasm.",
        "Joy is in anticipation.",
        "Excitement sparks action.",
        "Let curiosity guide you.",
        "Eager hearts achieve more.",
        "Energy is contagious, spread it."
    ],
    angry: [
        "Anger is a short madness.",
        "Take a breath, let it go.",
        "Control anger before it controls you.",
        "Rage is wasted energy.",
        "Pause before reacting.",
        "Speak when calm, not angry.",
        "Anger is temporary, consequences last.",
        "Channel anger into progress.",
        "Do not let anger dictate choices.",
        "Forgiveness frees the mind."
    ],
    bored: [
        "Boredom is creativity waiting to happen.",
        "Try something new today.",
        "Explore, learn, grow.",
        "Turn monotony into opportunity.",
        "Boredom can spark genius.",
        "Invent, play, discover.",
        "Break routines, make memories.",
        "A bored mind seeks adventure.",
        "Creativity thrives in stillness.",
        "Curiosity cures boredom."
    ],
    anxious: [
        "This too shall pass.",
        "Focus on what you can control.",
        "Anxiety is temporary, courage is lasting.",
        "Breathe deeply, find calm.",
        "Worry less, live more.",
        "Peace comes with acceptance.",
        "Take small steps, one at a time.",
        "Release what you cannot change.",
        "Anxiety does not define you.",
        "Trust your inner strength."
    ],
    hopeful: [
        "Hope is the only thing stronger than fear.",
        "Keep looking forward.",
        "Every dawn brings new possibilities.",
        "Never lose hope.",
        "Hope fuels resilience.",
        "Believe in better days.",
        "Hope is a choice you make daily.",
        "The future is full of promise.",
        "Let hope guide your actions.",
        "Hope shines brightest in darkness."
    ],
    proud: [
        "Celebrate your victories, big or small.",
        "You’ve done amazing, keep going.",
        "Pride is earned through effort.",
        "Be proud of your growth.",
        "Achievement begins with belief.",
        "Stand tall in your successes.",
        "Honor your hard work.",
        "Pride motivates progress.",
        "Value your accomplishments.",
        "Your journey deserves recognition."
    ],
    curious: [
        "Curiosity is the beginning of wisdom.",
        "Ask questions, learn everything.",
        "Wonder fuels discovery.",
        "Never stop exploring.",
        "Curiosity leads to growth.",
        "Seek knowledge constantly.",
        "Explore the unknown.",
        "Curiosity opens doors.",
        "Learning starts with why.",
        "Be endlessly curious."
    ]
};

// Store last quote index per feeling to avoid repetition
const lastQuoteIndex = {};

function generateAIQuote() {
    const checkedFeelings = Array.from(document.querySelectorAll('.feelings input:checked')).map(el => el.value);
    if (!checkedFeelings.length) {
        alert("Please select at least one feeling!");
        return;
    }

    const randomFeeling = checkedFeelings[Math.floor(Math.random() * checkedFeelings.length)];
    const feelingQuotes = quotes[randomFeeling];

    // pick random quote that is not the same as last one
    let index;
    do {
        index = Math.floor(Math.random() * feelingQuotes.length);
    } while (index === lastQuoteIndex[randomFeeling] && feelingQuotes.length > 1);

    lastQuoteIndex[randomFeeling] = index;

    document.getElementById("quote").innerText = feelingQuotes[index];
    document.getElementById("meaning").innerText = `Feeling: ${randomFeeling}`;
}

// Text-to-Speech
function startVoice() {
    const quoteText = document.getElementById("quote").innerText;
    if (!quoteText || quoteText === "Your quote will appear here...") return;
    const utterance = new SpeechSynthesisUtterance(quoteText);
    speechSynthesis.speak(utterance);
}

// Download quote card as image
function downloadImage() {
    const card = document.getElementById("card");
    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "quote.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}