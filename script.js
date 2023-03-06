//complete this code
class Person {
	private String name;
	private int age;

	public Person(String name,int age){
		this.name=name;
		this.age=age;
	}

	public String getName(){
		return name;
	}


	public void setAge(int age){
		this.age=age;
	}
}

class Student extends Person 
	

	public void study(String name,int age){
		Student student=new Student();
		String name=student.setName(name);
		System.out.println(name+""+"is studying");
}
}

class Teacher extends Person {
	
	public void teach(String name,int age){
		Teacher t=new Teacher();
		String name=t.setName(name);
		System.out.println(name+""+"is teaching");
	}
}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
