/* import { cardsContainer, initialCards } from './constants.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';

export const renderElements = (isGrid) => {
  cardsContainer.innerHTML = '';
  initialCards.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, '.default-card')
      : new HorizontalCard(item, '.horizontal-card');

    const cardElement = card.generateCard();
    cardsContainer.append(cardElement);
  });
}; */