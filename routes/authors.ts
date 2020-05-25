import express from "express";
import * as AuthorsController from "../controllers/AuthorsController";

module authorsRouter {
    export function getRoutes() {
        let router: any = express.Router();
        router.route('/')
            .get('/', AuthorsController.authors)
            .get('/', AuthorsController.author)
            .post('/', AuthorsController.create)
            .put('/', AuthorsController.update)
            .delete('/', AuthorsController.del);
        return router;
    }
}
export default authorsRouter;




