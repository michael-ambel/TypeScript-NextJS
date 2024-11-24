export class DataResource<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async loadAll(): Promise<T[]> {
    const res = await fetch(this.endpoint);
    return res.json();
  }
  async loadOne(id: number): Promise<T> {
    const res = await fetch(this.endpoint + `/${id}`, {
      method: "DELETE",
    });

    return res.json();
  }
  async deleteOne(id: number): Promise<Response> {
    const res = await fetch(this.endpoint + `/${id}`);
    return res;
  }
  async save(data: T): Promise<Response> {
    const res = await fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "Application/json" },
    });
    return res;
  }
}
