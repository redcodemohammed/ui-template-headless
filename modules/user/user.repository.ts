import type { FetchOptions } from "ofetch";

// locals
import FetchFactory from "../repository/factory";

class ProductsModule extends FetchFactory<PrismaUser[]> {
  private RESOURCE = "/users";

  /**
   * Return the users as array
   * @returns
   */
  list(): Promise<PrismaUser[]> {
    const fetchOptions: FetchOptions<"json"> = {
      headers: {
        "Accept-Language": "en-US",
      },
    };
    return this.call(
      "GET",
      `${this.RESOURCE}`,
      undefined, // body
      fetchOptions,
    );
  }
}

export default ProductsModule;
