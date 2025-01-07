const messages = [
    { 
        text: "You're not rian bro.😄", 
        image: "https://cdn.discordapp.com/attachments/1238397145615437834/1326159349130985492/apa_elo_tega.jpg?ex=677e69a3&is=677d1823&hm=e75353cf0550d1657b70e7296af67bfaf1b602e0a99be954acca5893b52acb73&",
        minValue: 0,
        maxValue: 20
    },
    { 
        text: "Kamu sepertinya gabrian😑 (pangkat terendah dari rian)", 
        image: "https://cdn.discordapp.com/attachments/1238397145615437834/1326159349663404112/dajjal.png?ex=677e69a3&is=677d1823&hm=b30e3ba7e72ed3277187847f010464ddf0b6e875a4902f8599bead976e3dc412&",
        minValue: 21,
        maxValue: 40
    },
    { 
        text: "Kamu sepertinya antek-antek rian 😡", 
        image: "https://cdn.discordapp.com/attachments/1238397145615437834/1326159350120579092/IMG-20231124-WA0030.jpg?ex=677e69a3&is=677d1823&hm=293007be210252e68b942102c2783511c6280138bebc9ee40e5c2ce14cbdc28e&",
        minValue: 41,
        maxValue: 70
    },
    { 
        text: "Kamu rian!😲", 
        image: "https://cdn.discordapp.com/attachments/1238397145615437834/1326159350502395974/279088014_5072505696151983_3829913616711343318_n.jpg?ex=677e69a4&is=677d1824&hm=236414af0365695c42ac6a336509f3548f1607399d4fbe2a5a6349df000d948d&",
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
