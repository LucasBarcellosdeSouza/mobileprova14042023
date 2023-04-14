import React from 'react';
import Item from './Item';

const App = () => {
  const items = [
    {
      name: 'Espada Pesada lendaria',
      image: 'image.png',
      description: 'Uma espada lendária com grande poder de ataque porem lenta.',
    },
    {
      name: 'Escudo Ultra',
      image: 'image.png',
      description: 'Um escudo ultra poderoso com defesa quase maxima.',
    },
    {
      name: 'Poção de Cura',
      image: 'image.png',
      description: 'Uma poção mágica que recupera 50 pontos de vida.',
    },
  ];

  const handleTrade = (itemName) => {
    // Lógica para abrir a tela de proposta de troca para o item selecionado
    console.log(`Botão de troca clicado para o item ${itemName}!`);
  };

  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.name}
          image={item.image}
          name={item.name}
          description={item.description}
          onTrade={() => handleTrade(item.name)}
        />
      ))}
    </div>
  );
};

export default App;
