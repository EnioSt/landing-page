import React, { useState } from "react";
import "./form.css";

const Form = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        redeSocial: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

       // Gera a mensagem formatada
  const gerarMensagem = () => {
    const { nome, email, telefone, redeSocial } = formData;
    return `Olá! Meu nome é *${nome}* e gostaria de entrar em contato.

    📧 Email: ${email}
    📞 Telefone: ${telefone}
    🔗 Rede Social: ${redeSocial}`;
  };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const numeroWhatsApp = "17992097230"; // Substitua pelo seu número com DDD
        const mensagem = gerarMensagem();
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(urlWhatsApp, "_blank");
      };
    
      return (
        <section id="contato" className="section-contato">
          <div className="container">
            
            <form className="form-container" onSubmit={handleSubmit}>

            <h2>Entre em Contato</h2>
            
              <label>Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
              />
    
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                required
              />
    
              <label>Telefone</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(99) 99999-9999"
                required
              />
    
              <label>Rede Social</label>
              <input
                type="text"
                name="redeSocial"
                value={formData.redeSocial}
                onChange={handleChange}
                placeholder="Instagram, LinkedIn, etc."
              />
    
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      );
};

export default Form;
