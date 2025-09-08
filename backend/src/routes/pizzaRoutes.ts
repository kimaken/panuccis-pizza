import { Router } from 'express';
import { getPizzas, getPizzaById, createPizza, deletePizza } from '../controllers/pizzaController';

const router = Router();

router.get('/', getPizzas);
router.get('/:id', getPizzaById);
router.post('/', createPizza);
router.delete('/:id', deletePizza);

export default router;
