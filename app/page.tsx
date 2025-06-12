"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "autista tbm ama",
    "vc e o amor da minha vida",
    "quero casar com vc e fazer um monte de filhotinhos",
    "meu sonho e voce me chamar de marido",
    "sinto que nosso amor foi escrito junto ao universo"
  ];

  useEffect(() => {
    // Removido: não abre automaticamente mais
  }, []);

  useEffect(() => {
    if (showContent) {
      const messageTimer = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 4000);

      return () => clearInterval(messageTimer);
    }
  }, [showContent, messages.length]);

  const handleCurtainClick = () => {
    if (!curtainOpen) {
      setCurtainOpen(true);
      setTimeout(() => setShowContent(true), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-600 to-pink-500 relative overflow-hidden">
      {/* Corações flutuantes de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-300/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Cortinas */}
      <div
        className={`fixed inset-0 z-50 flex cursor-pointer transition-all duration-2000 ease-in-out ${
          curtainOpen ? "translate-x-full" : "translate-x-0"
        }`}
        onClick={handleCurtainClick}
      >
        {/* Cortina esquerda */}
        <div className="w-1/2 h-full bg-gradient-to-r from-red-800 to-red-700 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-2 bg-yellow-600 shadow-lg"></div>
          {!curtainOpen && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/80">
                <p className="text-2xl mb-4">clica aqui rabudinha</p>
                <div className="text-6xl animate-pulse">💕</div>
              </div>
            </div>
          )}
        </div>

        {/* Cortina direita */}
        <div className="w-1/2 h-full bg-gradient-to-l from-red-800 to-red-700 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-red-900/50 to-transparent"></div>
          <div className="absolute left-0 top-0 h-full w-2 bg-yellow-600 shadow-lg"></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div
        className={`transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header com mensagem principal */}
        <div className="text-center pt-16 pb-8">
          <h1 className="text-8xl font-bold text-white mb-6 animate-pulse">
            EU TE AMO
          </h1>
          <div className="h-24">
            <p className="text-2xl md:text-3xl text-pink-100 font-light transition-all duration-500 px-4">
              {messages[currentMessage]}
            </p>
          </div>
        </div>

        {/* Nossa foto */}
        <div className="container mx-auto px-8 py-8 relative">
          <div className="flex justify-center">
            <div className="group relative bg-white p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1 max-w-2xl w-full">
              {/* Moldura da foto - agora mostrando as duas fotos */}
              <div className="flex gap-4 justify-center">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-md relative overflow-hidden shadow-inner w-60 h-80">
                  <Image
                    src="/Photos-1-001/20230806_151318.heic.jpg"
                    alt="Rafael e Sarah 1"
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-md relative overflow-hidden shadow-inner w-60 h-80">
                  <Image
                    src="/Photos-1-001/20230806_151325.heic.jpg"
                    alt="Rafael e Sarah <3"
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>
              {/* Legenda especial */}
              <div className="mt-4 text-center">
                <p className="text-red-800 font-bold text-xl">
                  Rafael + Sarah = 💖 eterno
                </p>
              </div>
            </div>
          </div>
          
          {/* Adendo com flecha - posicionado do lado */}
          <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 hidden md:block">
            <div className="bg-yellow-200 text-black p-3 rounded-lg shadow-lg max-w-xs relative">
              <p className="text-sm font-medium">
                Sei q vc n vai gostar da foto, mas eu to nem ai hehehe amo esse momento.
              </p>
              {/* Flecha apontando para a esquerda */}
              <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-yellow-200"></div>
              </div>
            </div>
          </div>
          
          {/* Versão mobile do adendo */}
          <div className="md:hidden mt-4 flex justify-center">
            <div className="bg-yellow-200 text-black p-3 rounded-lg shadow-lg max-w-sm">
              <p className="text-sm font-medium text-center">
                Sei q vc n vai gostar da foto, mas eu to nem ai hehehe amo esse momento.
              </p>
            </div>
          </div>
        </div>

        {/* Mensagem final personalizada */}
        <div className="text-center py-16">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <h3 className="text-5xl font-bold text-white mb-6">
              Rafael e Sarah! 💖
            </h3>
            <h4 className="text-3xl text-pink-200 mb-6 font-semibold">
              Sarah
            </h4>
            <p className="text-xl text-pink-100 leading-relaxed mb-6">
              Sinceramente eu n fazia ideia do que era amor ate te conhecer.
              nao conhecia o medo de perder.
              nao conhecia nada, como se nunca tivesse existido.
              mas no meio de tantos sentimentos, descobri a mim mesmo.
              minha melhor versao.
              meu melhor eu e ao seu lado.
              varias vezes nos perdermos um do outro.
              tao perdidos que ate perdi a esperanca de te encontrar.
              mas aqui estamos, juntos, de novo.
              e me sinto o homem mais feliz do mundo.
              eu te amo muito, com tudo com oq tenho e tudo q eu nem descobri.
              quero ficar ao seu lado ate as cinzas.
              por que nosso amor e interminavel e sempre surge de novo.
              te amo
            </p>
            <p className="text-2xl text-white font-semibold mb-4">
              EU TE AMO DEMAIS, Sarahhhhhhhhh! 💕
            </p>
            <p className="text-lg text-pink-200">
              Que venham mais anos de amor e felicidade juntos!
              E sexo insano.
            </p>
            <div className="mt-6 text-5xl animate-bounce">
              💝🌹💝
            </div>
          </div>
        </div>

        {/* Footer romântico */}
        <div className="text-center pb-8">
          <p className="text-pink-200 text-lg">
            Feito com muito amor ❤️
            <br />- Rafael, seu futuro marido.
          </p>
          <p className="text-pink-300 text-sm mt-2">
            Para de duvidar que eu sou seu, mulher sou todinho seu pra sempre.
          </p>
        </div>
      </div>
    </div>
  );
}
