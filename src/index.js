const pokeEntryNode = document.getElementById('test');


pokeEntryNode.style.backgroundImage = 'linear-gradient(to bottom right, #F08030 , rgba(255, 255, 255, 0))';

pokeEntryNode.addEventListener('click', () => {
    console.log('it worked!!!');
});