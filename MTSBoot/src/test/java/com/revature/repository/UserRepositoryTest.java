package com.revature.repository;

import com.revature.models.User;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
class UserRepositoryTest {
    @Autowired
    private TestRestTemplate testRestTemplate;
    @Autowired
    private UserRepository userRepository;

    @Test
    public void should_store_a_user() {
        User user= userRepository.save(new User("Solomon","kahsai","kahsai@email.com","password"));
        assertThat(user).hasFieldOrPropertyWithValue("first", "Solomon");
        assertThat(user).hasFieldOrPropertyWithValue("last", "kahsai");
        assertThat(user).hasFieldOrPropertyWithValue("email", "kahsai@email.com");
        assertThat(user).hasFieldOrPropertyWithValue("password", "password");

    }

    }
