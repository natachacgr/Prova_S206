package Prova_Karate;

import com.intuit.karate.junit5.Karate;

class exer1Runner {
    @Karate.Test
    Karate test() {
        return Karate.run("exer1").relativeTo(getClass());
    }
}

