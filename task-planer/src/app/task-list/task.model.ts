export class Task {
  constructor(
    public name: string,
    public category: string,
    public status: string = 'Запланировано',
    public dateStart?: string,
    public dateEnd?: string
  ) {}
}
