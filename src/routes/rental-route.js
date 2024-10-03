import { Router } from 'express';
import { store, index, show, update, destroy } from '../controllers/rental-controller.js';

import check_token from '../middleware/check_token.js';
import check_role from '../middleware/check_role.js';
import check_idade from '../middleware/check_idade.js';

const router = Router();

router.post('/', check_token, check_role(['ADM']), store);
router.get('/', check_token, index);
router.get('/:id', check_token, check_idade([18]), show);
router.get('/:id', check_token, check_idade([16]), show);
router.get('/:id', check_token, check_idade([0]), show);
router.put('/:id', check_token, check_role(['ADM']), update);
router.delete('/:id', check_token, check_role(['ADM']), destroy);

export default router;
