// Function to click the skip ad button
function skipAd() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if (skipButton && window.getComputedStyle(skipButton).opacity === '1') {
        skipButton.click();
    }
}

// Observe changes in the DOM to detect the appearance of the skip ad button
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
            skipAd();
        }
    });
});

// Start observing the DOM for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial check in case the button is already available
skipAd();
