import { Componant } from "./Componenet";
import { File } from "./File";
import { Folder } from "./Folder";

const root:Folder=new Folder('Root');
const f1:Folder=new Folder('Java')
const f2:Folder=new Folder('Static')
const f3:Folder=new Folder('Design Pattern')
const file1:File=new File('extension.js')
const file2:File=new File('Test.java')
const file3:File=new File('manga.txt')



root.addComponent(f1)
f1.addComponent(file2)

f1.addComponent(f2)
f2.addComponent(f3)


root.view()