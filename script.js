// Sample data for IPOs
const upcomingIpos = [
    {
        name: "Nova Agritech Ltd.",
        logo: "https://example.com/nova-logo.png",
        priceBand: "Rs 39 - 41",
        openDate: "2024-01-22",
        closeDate: "2024-01-24",
        issueSize: "143.81 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-30",
        status: "Upcoming"
    },
    // Add more IPO data here
];

const ongoingIpos = [
    {
        name: "Medi Assist Healthcare Services Ltd. IPO",
        logo: "https://example.com/medi-assist-logo.png",
        priceBand: "Rs 398 - 430",
        openDate: "2024-01-19",
        closeDate: "2024-01-23",
        issueSize: "640.95 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-29",
        status: "Ongoing"
    }
    // Add more IPO data here
];

const faqs = [
    {
        question: "What is an IPO?",
        answer: "IPO or the Initial Public Offering is the first time a company issues its shares to the public. As an investor, you will now be able to subscribe for such shares, which was earlier open to only a specific lot of internal and institutional investors via opening a Demat account."
    },
    {
        question: "How to invest in an IPO?",
        answer: "To invest in an IPO, you need to have a Demat account and trading account. You can apply through your bank's net banking portal or through a trading platform."
    },
    {
        question: "What are the benefits of investing in an IPO?",
        answer: "Investing in an IPO can provide early access to a company's shares, potential for high returns, and the opportunity to be part of a company's growth."
    },
    {
        question: "What is the difference between an IPO and an FPO?",
        answer: "An IPO is the first sale of shares by a company to the public, while an FPO (Follow-on Public Offer) is when a company issues additional shares after the IPO."
    },
    {
        question: "How is the IPO price determined?",
        answer: "The IPO price is determined through a book-building process, where the company and its underwriters gauge investor demand and set a price accordingly."
    },
    {
        question: "What is a red herring prospectus?",
        answer: "A red herring prospectus is a preliminary registration document that provides details about an IPO but does not include the final price or number of shares."
    },
    {
        question: "Can retail investors apply for an IPO?",
        answer: "Yes, retail investors can apply for an IPO through their Demat and trading accounts, usually through the ASBA (Application Supported by Blocked Amount) process."
    },
    {
        question: "What happens if an IPO is oversubscribed?",
        answer: "If an IPO is oversubscribed, shares are allocated on a pro-rata basis, meaning investors may receive fewer shares than they applied for."
    },
    {
        question: "What is the lock-in period for IPO shares?",
        answer: "The lock-in period is the time during which certain shareholders cannot sell their shares after the IPO, typically lasting for one year."
    },
    {
        question: "How can I track the performance of an IPO after listing?",
        answer: "You can track the performance of an IPO by checking its stock price on stock market platforms or financial news websites."
    }
    // Add more FAQ items here
];

// Function to create IPO card
function createIpoCard(ipo) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="ipo-card">
                <div class="d-flex align-items-center gap-3 mb-3">
                    <img src="${ipo.logo}" alt="${ipo.name}" class="company-logo">
                    <h3 class="h6 mb-0">${ipo.name}</h3>
                </div>
                <div class="ipo-info">
                    <div class="ipo-info-item">
                        <span class="ipo-info-label">PRICE BAND</span>
                        <span class="ipo-info-value">${ipo.priceBand}</span>
                    </div>
                    <div class="ipo-info-item">
                        <span class="ipo-info-label">OPEN</span>
                        <span class="ipo-info-value">${new Date(ipo.openDate).toLocaleDateString()}</span>
                    </div>
                    <div class="ipo-info-item">
                        <span class="ipo-info-label">CLOSE</span>
                        <span class="ipo-info-value">${new Date(ipo.closeDate).toLocaleDateString()}</span>
                    </div>
                    <div class="ipo-info-item">
                        <span class="ipo-info-label">ISSUE SIZE</span>
                        <span class="ipo-info-value">${ipo.issueSize}</span>
                    </div>
                    <div class="ipo-info-item">
                        <span class="ipo-info-label">ISSUE TYPE</span>
                        <span class="ipo-info-value">${ipo.issueType}</span>
                    </div>
                    <div class="ipo-info-item">
                        <span class="ipo-info-label">LISTING DATE</span>
                        <span class="ipo-info-value">${new Date(ipo.listingDate).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="document-buttons">
                    <button class="document-button">RHP</button>
                    <button class="document-button">DRHP</button>
                </div>
            </div>
        </div>
    `;
}

// Function to create FAQ item
function createFaqItem(faq, index) {
    return `
        <div class="accordion-item">
            <h3 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${index}">
                    ${faq.question}
                </button>
            </h3>
            <div id="faq${index}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    ${faq.answer}
                </div>
            </div>
        </div>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Render upcoming IPOs
    const upcomingIposContainer = document.getElementById('upcomingIpos');
    upcomingIposContainer.innerHTML = upcomingIpos.map(ipo => createIpoCard(ipo)).join('');

    // Render ongoing IPOs
    const ongoingIposContainer = document.getElementById('ongoingIpos');
    ongoingIposContainer.innerHTML = ongoingIpos.map(ipo => createIpoCard(ipo)).join('');

    // Render FAQs
    const faqContainer = document.getElementById('faqAccordion');
    faqContainer.innerHTML = faqs.map((faq, index) => createFaqItem(faq, index)).join('');
});

