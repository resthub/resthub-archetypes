#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.common.util.PostInitialize;

import ${package}.model.Sample;
import ${package}.service.SampleService;

@Named("sampleInitializer")
public class SampleInitializer {

    @Inject
    @Named("sampleService")
    private SampleService sampleService;

    @PostInitialize
    public void init() {
        sampleService.create(new Sample("testSample1"));
        sampleService.create(new Sample("testSample2"));
        sampleService.create(new Sample("testSample3"));
    }
}
