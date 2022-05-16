const routes = {
    '/': hub,
    '/contact': contact
};

//초기화
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes['/'];
window.history.state = {data: '/'}


const onNavigate = (pathname) => {
    window.history.pushState(
        { data: pathname },
        'title을 pushState로',
        window.location.origin + pathname //  `http://127.0.0.1:5500` + `/index.html`
    )
    rootDiv.innerHTML = routes[pathname]
}

window.addEventListener('popstate',()=>{
    rootDiv.innerHTML = routes[window.history.state['data']] //맨처음 랜더링 됐을때 history.state가 null이여서 뒤로가기 시 오류 발생함
})