#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.service;

import org.resthub.common.service.CrudService;
import ${package}.model.Sample;

/**
 * This class describes a SampleService interface that could
 * be useful for RPC clients.
 * This contract module can be distributed to RPC clients, since it's got no hard dependency.
 */
public interface SampleService extends CrudService<Sample, String> {

}
