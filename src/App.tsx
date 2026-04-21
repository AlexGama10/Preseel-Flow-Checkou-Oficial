import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Package {
  image: string;
  name: string;
  price: string;
  baseUrl: string;
  tier: 'silver' | 'gold' | 'diamond' | 'video';
}

function App() {
  const [urlParams, setUrlParams] = useState<string>('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [backgroundGradient, setBackgroundGradient] = useState<string>('from-slate-950 via-blue-950 to-slate-900');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramString = searchParams.toString();
    if (paramString) {
      setUrlParams(`?${paramString}`);
    }
  }, []);

  const packages: Package[] = [
    {
      image: "https://i.postimg.cc/VvWH88wJ/6.png",
      name: "PACOTE PRATA",
      price: "29,90",
      baseUrl: "https://pagar.thaypack.com/4c420f",
      tier: 'silver'
    },
    {
      image: "https://i.postimg.cc/hvB36GkF/8.png",
      name: "PACOTE OURO",
      price: "39,90",
      baseUrl: "https://pagar.thaypack.com/44be49",
      tier: 'gold'
    },
    {
      image: "https://i.postimg.cc/ZR3MwNDF/TABELAS.png",
      name: "PACOTE DIAMANTE",
      price: "59,90",
      baseUrl: "https://pagar.thaypack.com/e19696",
      tier: 'diamond'
    },
    {
      image: "https://i.postimg.cc/fWcPXxdM/18.png",
      name: "CHAMADA DE VÍDEO",
      price: "49,90",
      baseUrl: "https://pagar.thaypack.com/c7fe46",
      tier: 'video'
    }
  ];

  const getTierColors = (tier: string) => {
    switch (tier) {
      case 'silver':
        return {
          gradient: 'from-cyan-400 to-cyan-600',
          accent: 'text-cyan-300',
          border: 'border-cyan-500',
          bg: 'bg-gradient-to-br from-cyan-950 to-slate-900',
          backgroundGradient: 'from-slate-950 via-cyan-900 to-slate-900'
        };
      case 'gold':
        return {
          gradient: 'from-yellow-300 to-yellow-400',
          accent: 'text-yellow-200',
          border: 'border-yellow-400',
          bg: 'bg-gradient-to-br from-yellow-950 to-amber-900',
          backgroundGradient: 'from-slate-950 via-yellow-900 to-slate-900'
        };
      case 'diamond':
        return {
          gradient: 'from-fuchsia-500 to-purple-600',
          accent: 'text-fuchsia-300',
          border: 'border-fuchsia-500',
          bg: 'bg-gradient-to-br from-fuchsia-950 to-purple-950',
          backgroundGradient: 'from-slate-950 via-fuchsia-900 to-slate-900'
        };
      case 'video':
        return {
          gradient: 'from-purple-500 to-violet-600',
          accent: 'text-purple-300',
          border: 'border-purple-500',
          bg: 'bg-gradient-to-br from-purple-950 to-violet-950',
          backgroundGradient: 'from-slate-950 via-purple-900 to-slate-900'
        };
      default:
        return {
          gradient: 'from-gray-400 to-gray-600',
          accent: 'text-gray-300',
          border: 'border-gray-500',
          bg: 'bg-slate-900',
          backgroundGradient: 'from-slate-950 via-blue-950 to-slate-900'
        };
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-500`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-cyan-300 to-amber-400 bg-clip-text text-transparent">
            Tabela de Preços
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => {
            const colors = getTierColors(pkg.tier);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setBackgroundGradient(colors.backgroundGradient);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setBackgroundGradient('from-slate-950 via-blue-950 to-slate-900');
                }}
                onTouchStart={() => {
                  setHoveredIndex(index);
                  setBackgroundGradient(colors.backgroundGradient);
                }}
                onTouchEnd={() => {
                  setHoveredIndex(null);
                  setBackgroundGradient('from-slate-950 via-blue-950 to-slate-900');
                }}
                className={`relative group transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
              >
                <div className={`absolute inset-0 ${colors.bg} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>

                <div className={`relative ${colors.bg} rounded-2xl overflow-hidden border ${colors.border} transition-all duration-300`}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="aspect-square overflow-hidden bg-slate-900">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className={`text-sm font-semibold tracking-widest ${colors.accent} mb-3 uppercase`}>
                      {pkg.name}
                    </h2>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        R$ {pkg.price}
                      </span>
                      <span className="text-slate-400 text-sm ml-1">/uma vez</span>
                    </div>

                    <a
                      href={`${pkg.baseUrl}${urlParams}`}
                      className={`group/btn relative w-full overflow-hidden rounded-xl py-3 px-4 font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                        pkg.tier === 'diamond'
                          ? `bg-gradient-to-r ${colors.gradient} text-slate-900 hover:shadow-2xl hover:shadow-cyan-500/50`
                          : `bg-gradient-to-r ${colors.gradient} text-slate-900 hover:shadow-xl`
                      }`}
                    >
                      <span>Comprar agora</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
