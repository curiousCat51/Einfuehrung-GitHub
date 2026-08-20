public  class Java {
    public static void main(String[] args) {
        System.out.print("What is your name?");
        String name = System.console().readLine();
        System.out.println("My name is Java");
        System.out.print("What is your age?");
        String age = System.console().readLine();
        System.out.println(age + "? So old already?!");
        System.out.println("My age is 25");
        System.out.println("Welcome " + name + ", please enter Alt+F4 to continue ;)");
        if(System.console().readLine().equals("Alt+F4")){
            System.out.println("Great! You didn't fall for it! Super glad I still have you here!");
            System.out.println("...\nJust kidding, I will exit now. Bye bye! >:3");
            System.exit(0);
        } else {
            System.out.println("Seems you are either too clever or too incompetent to enter the correct key combination, so I will just exit for you.");
            System.exit(0);
        }
    }
}
