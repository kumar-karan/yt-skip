function skipAd() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if (skipButton && window.getComputedStyle(skipButton).opacity === '1') {
        skipButton.click();
    }
}
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
            skipAd();
        }
    });
});
observer.observe(document.body, { childList: true, subtree: true });
skipAd();
