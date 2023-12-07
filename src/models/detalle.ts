export interface Detalle{
    id: number
    cantidad : number
    precioUnitario : number
    total : number
    idVenta: number
    idProducto: number 
    producto: { descripcion: string };
    venta: { transaccion: string };
  }
  