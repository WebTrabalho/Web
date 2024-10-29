document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('message').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato pelo email ${email}.`);

    document.getElementById('contactForm').reset();
});
