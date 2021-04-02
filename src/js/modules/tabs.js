const tabs = (tabContentSelector, tabLinksWrapperSelector, tabLinksSelector, activeClass, display = 'block') => {
    const tabContent = document.querySelectorAll(tabContentSelector),
        tabLinksWrapper = document.querySelector(tabLinksWrapperSelector),
        tabLinks = document.querySelectorAll(tabLinksSelector);
        
    //helper to show needed tab , default show first tab
    function showTabs(i = 0) {
        tabContent[i].style.display = display;
        tabLinks[i].classList.add(activeClass);
    }
    //helper to hidetabs
    function hideTabs() {
        tabContent.forEach(tab => {
            tab.style.display = 'none';
        })
        tabLinks.forEach(tabLink => {
            tabLink.classList.remove(activeClass);
        })
    }
    hideTabs();
    showTabs();

    
    tabLinksWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        //проверяем что кликнули в нужный таб или в его дочерний элемент
        if (target  && 
            (target.classList.contains(tabLinksSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabLinksSelector.replace(/\./, "")))) {
            tabLinks.forEach((item, i) => {
                //проверяем на в какой таб кликнули(или в его родителя)
                if (target === item || target.parentNode === item) {
                  
                    hideTabs();
                    showTabs(i);
                }
            })
        }
        
    })


    
}


export default tabs;