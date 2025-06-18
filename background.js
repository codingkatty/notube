chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    await chrome.storage.local.set({
        state: nextState
    });

    if (nextState === 'ON') {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['tubes/notube.js']
        });
    } else {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['tubes/yestube.js']
        });
    }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
        const data = await chrome.storage.local.get('state');

        if (data.state === 'ON') {
            await chrome.action.setBadgeText({
                tabId: tabId,
                text: 'ON'
            });
            
            await chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['tubes/notube.js']
            });
        } else {
            await chrome.action.setBadgeText({
                tabId: tabId,
                text: 'OFF'
            });
        }
    }
});
