const navBar = document.getElementById("navbar")

const arrayNav = ['Home','Single Movie','About', 'Search page', 'Favotie page']
const arrayLink =['index.html','singleMovie.html','About.html','Search_page.html','Favorites_page.html']

for (let i = 0; i < 5; i++) {
    navBar.innerHTML+= `<a href=${arrayLink[i]}>${arrayNav[i]}</a> `
}





















// my key api 8742d82704b948baa2f52a841774e03a