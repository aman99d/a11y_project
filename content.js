// javascript:
// (function(){var a11y=document.createElement('SCRIPT');
// //alert("button is clicked");
// a11y.type='text/javascript';
// //alert("button is clicked11");
// a11y.src='access/tota11y.js';
// //alert("button is clicked123");
// document.getElementsByTagName('head')[0].appendChild(a11y);})();
//alert("button is clicked1234");
// var my_awesome_script = document.createElement('script');
// my_awesome_script.setAttribute('src','https://example.com/site.js123');
// document.head.appendChild(my_awesome_script);
console.log("content script injected")
chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.from === "popup" && message.query === "a11y_scan_button_clicked") {
        javascript:
        console.log("content script started")
        let count = 1;
        const tab_sequence = document.querySelectorAll('a[href], area[href],button:not([disabled]), input:not([disabled]), textarea:not([disabled]), iframe, object, embed , select:not([disabled]), *[contenteditable], details, [tabindex]:not([tabindex="-1"])');
        for (var i = 0; i < tab_sequence.length; i++) {
            tab_sequence[i].style.border = '2px solid #4FCAFC';
            const badgeElement = document.createElement('div');
            badgeElement.className = 'badge';
            badgeElement.textContent = count;
            // Append the badge element to the target element
            tab_sequence[i].appendChild(badgeElement);
            // Example CSS for the badge element
            badgeElement.style.border='1px solid #4FCAFC';
            badgeElement.style.backgroundColor = '#4FCAFC';
            badgeElement.style.color = 'white';
            badgeElement.style.position = 'relative';
            badgeElement.style.padding = '4px';
            badgeElement.style.borderRadius ='1px';
            badgeElement.style.fontWeight = "bold";
            count=count+1;            
        }
        //For tab sequence
        // const tabKeyEvent = new KeyboardEvent('keydown', { key: 'Tab' });
        // for (var i = 0; i < 10; i++)
        //     document.dispatchEvent(tabKeyEvent);

        
        
        

// Create the basdge element
        // const badgeElement = document.createElement('div');
        // badgeElement.className = 'badge';
        // badgeElement.textContent = 'New';

        // // Append the badge element to the target element
        // targetElement[0].appendChild(badgeElement);
        // console.log("content script started1")
        // // Example CSS for the badge element
        // badgeElement.style.border='3px solid red';
        // // Example usage:
        
        // (function(){var a11y=document.createElement('SCRIPT');
        // a11y.type='text/javascript';
        // a11y.src='https://spgl-my.sharepoint.com/:u:/r/personal/aman_dwivedi_spglobal_com/Documents/tota11y.js';
        // document.getElementsByTagName('head')[0].appendChild(a11y);})();
        // var tab_sequence = document.getElementsByTagName('a');
        // console.log("content script middle")
        // for (var i = 0; i < tab_sequence.length; i++) {
        //   tab_sequence[i].style.border = '3px solid blue';
        // }
        // setTimeout(() => {

        //     const eyeDropper = new EyeDropper();

        //     eyeDropper.open().then(result => {
        //         chrome.storage.local.get("color_hex_code", (resp) => {
        //             if (resp.color_hex_code && resp.color_hex_code.length > 0) {
        //                 chrome.storage.local.set({ "color_hex_code": [...resp.color_hex_code, result.sRGBHex] })
        //             }
        //             else {
        //                 console.log("no")
        //                 chrome.storage.local.set({ "color_hex_code": [result.sRGBHex] })
        //             }
        //         })
        //     }).catch(e => {
        //         console.log(e)
        //     })
        // }, 500);
    }
})