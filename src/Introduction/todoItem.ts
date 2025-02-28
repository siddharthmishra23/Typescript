export class TodoItem {
  public constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {
    // not required to assign values here as public defined in the methods tells that value will be set automatically
  }

  public printDetails(): void {
    console.log(
      `${this.id}\t ${this.task} ${this.complete} ? "\t(complete)" : ""`
    );
  }
}
