const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click' , (e)=>{
        const sectionContent = document.querySelector(`${tab.dataset.tabTarget}`)
        tabContents.forEach(content=>{
            content.dataset.tabContent =""
        })
        sectionContent.dataset.tabContent = "show"

    })

})
