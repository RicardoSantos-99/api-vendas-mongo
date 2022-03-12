import { Request, Response } from "express";
import { CreateProductService } from "@modules/product/services/CreateProduct.service";
import { ListProductsService } from "@modules/product/services/ListProducts.service";
import { DeleteProductService } from "@modules/product/services/DeleteProduct.service";
import { UpdateProductService } from "@modules/product/services/UpdateProduct.service";
import { ShowProductService } from "@modules/product/services/ShowProduct.service";

class ProductController {
    async create(request: Request, response:Response): Promise<Response> {
        const { nome, valor } = request.body;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute(
            nome,
            valor,
        )
        
        return response.json(product);
    }
    
    async findAllProducts(request: Request, response: Response) {
        const listProducts = new ListProductsService();
        
        const products = await listProducts.execute();

        return response.json(products);
    }
    
    async findProductById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showProduct = new ShowProductService();

        const product = await showProduct.execute(id);

        return response.json(product);
    }
    
    async updateProduct(request:Request, response:Response): Promise<Response> {
        const { id } = request.params;
        const { nome, valor } = request.body;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute(
            id,
            nome,
            valor,
        )

        return response.json(product);
    }

    async deleteProduct (request:Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute(id);

        return response.json({message: 'Produto excluído com sucesso.'});
    }
}

export {ProductController};