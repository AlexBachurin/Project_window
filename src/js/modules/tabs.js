const tabs = (tabContentSelector, tabLinksWrapperSelector, tabLinksSelector, activeClass) => {
    const tabContent = document.querySelectorAll(tabContentSelector),
        tabLinksWrapper = document.querySelector(tabLinksWrapperSelector),
        tabLinks = document.querySelectorAll(tabLinksSelector);
        console.log(tabLinksWrapper);
        console.log(tabLinks);
        console.log(tabContent)

    function showTabs(i = 0) {
        tabContent[i].style.display = 'block';
        tabLinks[i].classList.add(activeClass);
    }

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
                    console.log(target)
                    console.log(target.parentNode)
                    hideTabs();
                    showTabs(i);
                }
            })
        }
        
    })


    
}


export default tabs;