package com.ey.pricingservice.config;

import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.util.thread.QueuedThreadPool;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.web.embedded.jetty.JettyServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;


@SpringBootConfiguration
public class JettyConfig {

    @Value("${server.port}")
    private int port;

    @Bean
    public ServletWebServerFactory servletContainer() {
        JettyServletWebServerFactory jetty = new JettyServletWebServerFactory();
        customizeJetty(jetty);
        return jetty;
    }

    private void customizeJetty(JettyServletWebServerFactory container) {
        container.addServerCustomizers((Server server) -> {
            //配置线程
            threadPool(server);

            // 添加HTTP配置
            ServerConnector connector = new ServerConnector(server);
            connector.setPort(8888);
            server.setConnectors(new Connector[]{connector});
        });

    }

    private void threadPool(Server server) {
        // connections
        final QueuedThreadPool threadPool = server.getBean(QueuedThreadPool.class);
        //默认最大线程连接数300
        threadPool.setMaxThreads(300);

        //默认最小线程连接数4
        threadPool.setMinThreads(4);
        //默认线程最大空闲时间60000ms
        threadPool.setIdleTimeout(60000);
    }

/*
    @Value("/PricingService/*")
    private String path;

 @Value("/pricing")
    private String urlPath;

 @Bean
    public ServletRegistrationBean dispatcherServlet() {
        return new ServletRegistrationBean(new CXFServlet(), path);
    }*/
  /*  @Autowired
    private Bus bus;

    //把实现类交给spring管理
    @Bean
    public PricingService appService() {
        return new PricingServiceImpl();
    }

    //终端路径
    @Bean
    public Endpoint endpoint() {
        EndpointImpl endpoint = new EndpointImpl(bus, appService());
        endpoint.publish("/pricing");
        return endpoint;
    }*/

}
