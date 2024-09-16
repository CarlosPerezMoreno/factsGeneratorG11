document.getElementById('getFact').addEventListener('click', async function() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        document.getElementById('fact').innerText = data.text;
    } catch (error) {
        document.getElementById('fact').innerText = 'Sorry, could not fetch a fact at the moment.';
        console.error('Error:', error);
    }
});
