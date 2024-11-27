const timelineData = {
    introduction: {
      text: "Let’s decipher milestone by milestone the fascinating story of Elon Musk, the man who’s turning wild dreams into reality faster than you can say “NEW.” Buckle up and get ready for a ride that’s out of this world!",
      image: "images/main.webp", // Add an appropriate image file
    },
    "2002": {
      text: "In 2002, eBay acquired PayPal for $1.5 billion in stock, shortly after PayPal went public, with over 70% of eBay auctions using PayPal for payments. After being ousted as CEO of PayPal, Elon Musk turned his focus to space exploration, founding SpaceX the same year with the goal of reducing space transportation costs and enabling the colonization of Mars.",
      image: "images/spacex.jpg", // Add an appropriate image file
    },
    "2020": {
      text: "In July 2020, Tesla became the world’s most valuable carmaker, surpassing Toyota with a market value of $209.47 billion, driven by its dominance in the electric vehicle market, innovative technology, and strong financial performance.",
      image: "images/tesla.jpg", // Add an appropriate image file
    },
    "2022": {
      text: "In 2022, Musk became Twitter’s majority shareholder by April 1 and later acquired the platform for $44 billion at the end of April. His goals included promoting free speech, introducing new features, making algorithms open source for increased trust, eliminating “bot” accounts, and verifying all users. Musk officially became the owner and CEO of Twitter in October 2022.",
      image: "images/x.jpg", // Add an appropriate image file
    },
  };
  
  const buttons = document.querySelectorAll(".timeline-btn");
  const infoBox = document.getElementById("info-box");
  const infoText = document.getElementById("info-text");
  const closeBtn = document.getElementById("close-btn");
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const period = button.getAttribute("data-period");
      const data = timelineData[period];
      if (data) {
        infoText.innerHTML = `<p>${data.text}</p><img src="${data.image}" alt="${period}">`;
        infoBox.classList.remove("hidden");
      }
    });
  });
  
  closeBtn.addEventListener("click", () => {
    infoBox.classList.add("hidden");
  });
  