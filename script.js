function getRecommendation() {
    let userChoice = document.getElementById("userNeeds").value;
    let result = document.getElementById("aiResult");

    let recommendations = {
        automation: "Try Zapier or UiPath for AI-driven business automation.",
        chatbot: "Use ChatGPT API or Tidio for intelligent customer support.",
        analytics: "Google AI and IBM Watson Analytics provide advanced AI insights.",
        marketing: "Opt for Jasper AI or Copy.ai for AI-powered marketing content."
    };

    result.innerHTML = `<strong>Recommended AI Tool:</strong> ${recommendations[userChoice]}`;
}
