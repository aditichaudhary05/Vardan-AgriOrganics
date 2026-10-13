// Replace these browser-local functions with fetch calls when a backend is ready.
const read = (key, fallback = []) => {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; }
  catch { return fallback; }
};
const save = (key, value) => { localStorage.setItem(key, JSON.stringify(value)); return value; };

export const mockApi = {
  products: {
    list: async () => read('v_products'),
    save: async product => save('v_products', [...read('v_products').filter(item => item.id !== product.id), product]),
  },
  orders: {
    list: async () => read('v_orders'),
    create: async order => save('v_orders', [order, ...read('v_orders')]),
  },
  submit: async (kind, entry) => save(`v_${kind}`, [entry, ...read(`v_${kind}`)]),
};
