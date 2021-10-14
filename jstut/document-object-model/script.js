const container = document.querySelector('#container');

    const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'This is the glorious text-content';

    container.appendChild(content);

    const para = document.createElement('p');
        para.classList.add('para');
        para.setAttribute('style', 'color: red');
        para.textContent = `Hey I'm red!`
    
    container.appendChild(para);

    const h3 = document.createElement('h3');
        para.classList.add('h3');
        h3.setAttribute('style', 'color: blue');
        h3.textContent = `I'm a blue h3!`
    
    container.appendChild(h3);

    const box = document.createElement('div');
        document.querySelector('#box')
        box.classList.add('box');
        box.setAttribute('style', 'border: black solid 2px; background: pink');

    container.appendChild(box);

        const h1 = document.createElement('h1');
            h1.classList.add('h1');
            h1.textContent = `I'm in a div`;

        box.appendChild(h1);

        const para2 = document.createElement('p');
            para2.classList.add('para2');
            para2.textContent = 'ME TOO!'
        
        box.appendChild(para2);