import { Asyncio as Async } from "./asyncio";
import { LoaderConfig } from "./type";
import { reactive } from "vue";

const Asyncio = (config: LoaderConfig = {}) => reactive(new Async(config));

export { Asyncio };
