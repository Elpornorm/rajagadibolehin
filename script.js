const messages = [
    { 
        text: "You're not rian bro.😄", 
        image: "https://i.pinimg.com/originals/7e/46/31/7e4631b6fea30649ce7f4f663fa6f501.gif",
        minValue: 0,
        maxValue: 20
    },
    { 
        text: "Kamu sepertinya gabrian😑 (pangkat terendah dari rian)", 
        image: "https://media.tenor.com/images/3e9c61c8e2e877f5fe7e4892fe6a4dd5/tenor.gif",
        minValue: 21,
        maxValue: 40
    },
    { 
        text: "Kamu sepertinya antek-antek rian 😡", 
        image: "https://media1.tenor.com/images/98557c9e9c0d42a6363c3e0ed1a6d0dc/tenor.gif",
        minValue: 41,
        maxValue: 70
    },
    { 
        text: "Kamu rian!😲", 
        image: "https://media.tenor.com/images/3b3c1c5e9b988c91f1d85fde61fd7151/tenor.gif",
        minValue: 71,
        maxValue: 100
    }
];

function calculateResult() {
    const name = document.getElementById('nameInput').value;
    if (!name) {
        alert('Tolong masukkan nama kamu!');
        return;
    }

    let percentage;
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('rian') || lowercaseName.includes('raja')) {
        percentage = 100;
    } else {
        percentage = Math.floor(Math.random() * 101);
    }
    
    const resultMessage = messages.find(msg => 
        percentage >= msg.minValue && percentage <= msg.maxValue
    );

    const meterFill = document.getElementById('meterFill');
    const meterValue = document.getElementById('meterValue');
    meterFill.style.width = '0%';
    meterValue.textContent = '0';
    
    document.getElementById('resultContainer').style.display = 'block';

    setTimeout(() => {
        meterFill.style.width = percentage + '%';
        let currentValue = 0;
        const interval = setInterval(() => {
            if (currentValue >= percentage) {
                clearInterval(interval);
                if (percentage === 100) {
                    setTimeout(() => {
                        window.location.href = 'rianohrian.html';
                    }, 2000);
                }
            } else {
                currentValue++;
                meterValue.textContent = currentValue;
            }
        }, 20);
    }, 100);

    document.getElementById('percentageText').textContent = 
        `${name.toUpperCase()} ${percentage}%, KAMU...`;
    document.getElementById('messageText').textContent = resultMessage.text;
    document.getElementById('resultImage').src = resultMessage.image;
}
