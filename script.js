function analyzeSentence() {
    // Get the input value
    const sentence = document.getElementById('input-sentence').value;
    
    // Process the sentence using compromise
    const nlp = window.nlp;
    const doc = nlp(sentence);
    
    // Define part of speech classes
    const posClasses = {
        'Noun': 'noun',
        'Verb': 'verb',
        'Adjective': 'adjective',
        'Adverb': 'adverb',
        'Pronoun': 'pronoun',
        'Conjunction': 'conjunction',
        'Preposition': 'preposition'
    };

    // Tokenize and analyze each word
    let resultHTML = '';
    doc.terms().forEach(term => {
        const word = term.text;
        const pos = term.tags[0] || 'Unknown';
        const className = posClasses[pos] || 'unknown';
        resultHTML += `<span class="${className}">${word}</span> `;
    });

    // Display the result
    document.getElementById('result').innerHTML = resultHTML;
}
