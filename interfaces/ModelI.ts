export default interface ModelI{
    staticfindAll(): Promise<any>;
    findOne(): Promise<any>;
    create(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}
