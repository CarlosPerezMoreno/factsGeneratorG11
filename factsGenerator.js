/*get the element */.addEventListener('click', async function() {
    try {
        /*store it*/ = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        if (!response.ok) throw new Error('Network response was not ok');
        /* store the data */ = await response.json();
        /*display the data wit hthe text*/
    } catch (error) {
        document.getElementById('fact').innerText = 'Sorry, could not fetch a fact at the moment.';
        console.error('Error:', error);
    }
});
