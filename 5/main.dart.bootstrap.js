(function() {
// Attempt to detect --precompiled mode for tests, and set the base url
// appropriately, otherwise set it to "/".
var baseUrl = (function() {
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/$sdk/dev_compiler/amd/dart_sdk",
 "web/main": "main.ddc",
 "packages/server_communication/in_memory_data_service.template": "packages/server_communication/in_memory_data_service.template.ddc",
 "packages/angular/src/di/reflector": "packages/angular/src/di/reflector.ddc",
 "packages/angular/src/core/di/decorators": "packages/angular/src/core/di/decorators.ddc",
 "packages/angular/src/core/di/opaque_token": "packages/angular/src/core/di/opaque_token.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/angular/src/runtime": "packages/angular/src/runtime.ddc",
 "packages/angular/src/runtime/optimizations": "packages/angular/src/runtime/optimizations.ddc",
 "packages/server_communication/src/toh/hero": "packages/server_communication/src/toh/hero.ddc",
 "packages/http/testing": "packages/http/testing.ddc",
 "packages/http/src/mock_client": "packages/http/src/mock_client.ddc",
 "packages/http/src/byte_stream": "packages/http/src/byte_stream.ddc",
 "packages/http/src/base_client": "packages/http/src/base_client.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/combined_wrappers/combined_map": "packages/collection/src/combined_wrappers/combined_map.ddc",
 "packages/collection/src/union_set": "packages/collection/src/union_set.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/functions": "packages/collection/src/functions.ddc",
 "packages/collection/src/equality": "packages/collection/src/equality.ddc",
 "packages/collection/src/equality_set": "packages/collection/src/equality_set.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/empty_unmodifiable_set": "packages/collection/src/empty_unmodifiable_set.ddc",
 "packages/collection/src/queue_list": "packages/collection/src/queue_list.ddc",
 "packages/collection/src/union_set_controller": "packages/collection/src/union_set_controller.ddc",
 "packages/collection/src/combined_wrappers/combined_iterable": "packages/collection/src/combined_wrappers/combined_iterable.ddc",
 "packages/collection/src/equality_map": "packages/collection/src/equality_map.ddc",
 "packages/collection/src/combined_wrappers/combined_list": "packages/collection/src/combined_wrappers/combined_list.ddc",
 "packages/http_parser/http_parser": "packages/http_parser/http_parser.ddc",
 "packages/http_parser/src/media_type": "packages/http_parser/src/media_type.ddc",
 "packages/string_scanner/string_scanner": "packages/string_scanner/string_scanner.ddc",
 "packages/string_scanner/src/eager_span_scanner": "packages/string_scanner/src/eager_span_scanner.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.ddc",
 "packages/source_span/src/location_mixin": "packages/source_span/src/location_mixin.ddc",
 "packages/source_span/src/file": "packages/source_span/src/file.ddc",
 "packages/source_span/src/span_exception": "packages/source_span/src/span_exception.ddc",
 "packages/source_span/src/location": "packages/source_span/src/location.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.ddc",
 "packages/source_span/src/colors": "packages/source_span/src/colors.ddc",
 "packages/path/path": "packages/path/path.ddc",
 "packages/path/src/path_exception": "packages/path/src/path_exception.ddc",
 "packages/path/src/characters": "packages/path/src/characters.ddc",
 "packages/path/src/utils": "packages/path/src/utils.ddc",
 "packages/source_span/src/utils": "packages/source_span/src/utils.ddc",
 "packages/string_scanner/src/utils": "packages/string_scanner/src/utils.ddc",
 "packages/charcode/ascii": "packages/charcode/ascii.ddc",
 "packages/string_scanner/src/string_scanner": "packages/string_scanner/src/string_scanner.ddc",
 "packages/string_scanner/src/line_scanner": "packages/string_scanner/src/line_scanner.ddc",
 "packages/string_scanner/src/exception": "packages/string_scanner/src/exception.ddc",
 "packages/http_parser/src/scan": "packages/http_parser/src/scan.ddc",
 "packages/http_parser/src/utils": "packages/http_parser/src/utils.ddc",
 "packages/http_parser/src/authentication_challenge": "packages/http_parser/src/authentication_challenge.ddc",
 "packages/http_parser/src/http_date": "packages/http_parser/src/http_date.ddc",
 "packages/http_parser/src/chunked_coding": "packages/http_parser/src/chunked_coding.ddc",
 "packages/http_parser/src/chunked_coding/decoder": "packages/http_parser/src/chunked_coding/decoder.ddc",
 "packages/typed_data/typed_data": "packages/typed_data/typed_data.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.ddc",
 "packages/http_parser/src/chunked_coding/encoder": "packages/http_parser/src/chunked_coding/encoder.ddc",
 "packages/http_parser/src/case_insensitive_map": "packages/http_parser/src/case_insensitive_map.ddc",
 "packages/http/src/utils": "packages/http/src/utils.ddc",
 "packages/async/async": "packages/async/async.ddc",
 "packages/async/src/stream_group": "packages/async/src/stream_group.ddc",
 "packages/async/src/delegate/sink": "packages/async/src/delegate/sink.ddc",
 "packages/async/src/delegate/future": "packages/async/src/delegate/future.ddc",
 "packages/async/src/typed/future": "packages/async/src/typed/future.ddc",
 "packages/async/src/delegate/stream_consumer": "packages/async/src/delegate/stream_consumer.ddc",
 "packages/async/src/delegate/stream_sink": "packages/async/src/delegate/stream_sink.ddc",
 "packages/async/src/delegate/stream": "packages/async/src/delegate/stream.ddc",
 "packages/async/src/typed_stream_transformer": "packages/async/src/typed_stream_transformer.ddc",
 "packages/async/src/result/future": "packages/async/src/result/future.ddc",
 "packages/async/src/null_stream_sink": "packages/async/src/null_stream_sink.ddc",
 "packages/async/src/stream_sink_completer": "packages/async/src/stream_sink_completer.ddc",
 "packages/async/src/async_memoizer": "packages/async/src/async_memoizer.ddc",
 "packages/async/src/lazy_stream": "packages/async/src/lazy_stream.ddc",
 "packages/async/src/stream_zip": "packages/async/src/stream_zip.ddc",
 "packages/async/src/stream_sink_transformer": "packages/async/src/stream_sink_transformer.ddc",
 "packages/async/src/delegate/event_sink": "packages/async/src/delegate/event_sink.ddc",
 "packages/async/src/single_subscription_transformer": "packages/async/src/single_subscription_transformer.ddc",
 "packages/async/src/delegate/stream_subscription": "packages/async/src/delegate/stream_subscription.ddc",
 "packages/async/src/typed/stream_subscription": "packages/async/src/typed/stream_subscription.ddc",
 "packages/async/src/restartable_timer": "packages/async/src/restartable_timer.ddc",
 "packages/async/src/stream_subscription_transformer": "packages/async/src/stream_subscription_transformer.ddc",
 "packages/async/src/future_group": "packages/async/src/future_group.ddc",
 "packages/async/src/utils": "packages/async/src/utils.ddc",
 "packages/async/src/stream_splitter": "packages/async/src/stream_splitter.ddc",
 "packages/async/src/subscription_stream": "packages/async/src/subscription_stream.ddc",
 "packages/async/src/result/capture_sink": "packages/async/src/result/capture_sink.ddc",
 "packages/async/src/stream_completer": "packages/async/src/stream_completer.ddc",
 "packages/http/src/exception": "packages/http/src/exception.ddc",
 "packages/server_communication/src/toh/hero.template": "packages/server_communication/src/toh/hero.template.ddc",
 "packages/angular/angular.template": "packages/angular/angular.template.ddc",
 "packages/angular/src/common/directives.template": "packages/angular/src/common/directives.template.ddc",
 "packages/angular/src/common/directives/ng_for.template": "packages/angular/src/common/directives/ng_for.template.ddc",
 "packages/angular/src/core/change_detection/differs/default_iterable_differ.template": "packages/angular/src/core/change_detection/differs/default_iterable_differ.template.ddc",
 "packages/angular/src/facade/exception_handler": "packages/angular/src/facade/exception_handler.ddc",
 "packages/logging/logging": "packages/logging/logging.ddc",
 "packages/angular/src/facade/exception_handler.template": "packages/angular/src/facade/exception_handler.template.ddc",
 "packages/angular/src/core/change_detection/differs/default_iterable_differ": "packages/angular/src/core/change_detection/differs/default_iterable_differ.ddc",
 "packages/angular/src/core/linker": "packages/angular/src/core/linker.ddc",
 "packages/angular/src/core/linker/query_list": "packages/angular/src/core/linker/query_list.ddc",
 "packages/angular/src/core/metadata": "packages/angular/src/core/metadata.ddc",
 "packages/angular/src/core/metadata/lifecycle_hooks": "packages/angular/src/core/metadata/lifecycle_hooks.ddc",
 "packages/angular/src/core/change_detection/change_detection_util": "packages/angular/src/core/change_detection/change_detection_util.ddc",
 "packages/angular/src/facade/lang": "packages/angular/src/facade/lang.ddc",
 "packages/angular/src/core/metadata/view": "packages/angular/src/core/metadata/view.ddc",
 "packages/angular/src/core/change_detection/change_detection": "packages/angular/src/core/change_detection/change_detection.ddc",
 "packages/angular/src/core/change_detection/pipe_transform": "packages/angular/src/core/change_detection/pipe_transform.ddc",
 "packages/angular/src/core/change_detection/change_detector_ref": "packages/angular/src/core/change_detection/change_detector_ref.ddc",
 "packages/angular/src/core/change_detection/constants": "packages/angular/src/core/change_detection/constants.ddc",
 "packages/angular/src/core/change_detection/differs/default_keyvalue_differ": "packages/angular/src/core/change_detection/differs/default_keyvalue_differ.ddc",
 "packages/angular/src/core/linker/exceptions": "packages/angular/src/core/linker/exceptions.ddc",
 "packages/angular/src/core/linker/element_ref": "packages/angular/src/core/linker/element_ref.ddc",
 "packages/angular/src/core/linker/app_view": "packages/angular/src/core/linker/app_view.ddc",
 "packages/angular/src/core/di": "packages/angular/src/core/di.ddc",
 "packages/angular/src/core/di/provider": "packages/angular/src/core/di/provider.ddc",
 "packages/angular/src/di/providers": "packages/angular/src/di/providers.ddc",
 "packages/angular/src/di/module": "packages/angular/src/di/module.ddc",
 "packages/angular/src/core/change_detection/component_state": "packages/angular/src/core/change_detection/component_state.ddc",
 "packages/angular/src/di/errors": "packages/angular/src/di/errors.ddc",
 "packages/angular/src/core/linker/app_view_utils": "packages/angular/src/core/linker/app_view_utils.ddc",
 "packages/angular/src/platform/dom/events/event_manager": "packages/angular/src/platform/dom/events/event_manager.ddc",
 "packages/angular/src/core/zone/ng_zone": "packages/angular/src/core/zone/ng_zone.ddc",
 "packages/stack_trace/stack_trace": "packages/stack_trace/stack_trace.ddc",
 "packages/stack_trace/src/chain": "packages/stack_trace/src/chain.ddc",
 "packages/stack_trace/src/utils": "packages/stack_trace/src/utils.ddc",
 "packages/angular/di": "packages/angular/di.ddc",
 "packages/angular/src/facade/facade": "packages/angular/src/facade/facade.ddc",
 "packages/angular/src/core/application_tokens": "packages/angular/src/core/application_tokens.ddc",
 "packages/angular/src/core/security": "packages/angular/src/core/security.ddc",
 "packages/angular/src/platform/dom/shared_styles_host": "packages/angular/src/platform/dom/shared_styles_host.ddc",
 "packages/angular/src/core/render/api": "packages/angular/src/core/render/api.ddc",
 "packages/angular/src/core/app_view_consts": "packages/angular/src/core/app_view_consts.ddc",
 "packages/angular/src/core/linker/view_type": "packages/angular/src/core/linker/view_type.ddc",
 "packages/angular/src/di/injector/empty": "packages/angular/src/di/injector/empty.ddc",
 "packages/angular/src/core/linker/dynamic_component_loader": "packages/angular/src/core/linker/dynamic_component_loader.ddc",
 "packages/angular/src/core/linker/component_resolver": "packages/angular/src/core/linker/component_resolver.ddc",
 "packages/angular/core": "packages/angular/core.ddc",
 "packages/angular/src/core/zone": "packages/angular/src/core/zone.ddc",
 "packages/angular/src/core/render": "packages/angular/src/core/render.ddc",
 "packages/angular/src/core/change_detection": "packages/angular/src/core/change_detection.ddc",
 "packages/angular/src/common/directives/ng_for": "packages/angular/src/common/directives/ng_for.ddc",
 "packages/angular/src/common/directives/ng_class.template": "packages/angular/src/common/directives/ng_class.template.ddc",
 "packages/angular/src/common/directives/ng_class": "packages/angular/src/common/directives/ng_class.ddc",
 "packages/angular/src/core/change_detection/differs/default_keyvalue_differ.template": "packages/angular/src/core/change_detection/differs/default_keyvalue_differ.template.ddc",
 "packages/angular/src/common/directives/core_directives.template": "packages/angular/src/common/directives/core_directives.template.ddc",
 "packages/angular/src/common/directives/core_directives": "packages/angular/src/common/directives/core_directives.ddc",
 "packages/angular/src/common/directives/ng_if": "packages/angular/src/common/directives/ng_if.ddc",
 "packages/angular/src/common/directives/ng_style": "packages/angular/src/common/directives/ng_style.ddc",
 "packages/angular/src/common/directives/ng_template_outlet": "packages/angular/src/common/directives/ng_template_outlet.ddc",
 "packages/angular/src/common/directives/ng_switch": "packages/angular/src/common/directives/ng_switch.ddc",
 "packages/angular/src/common/directives/ng_if.template": "packages/angular/src/common/directives/ng_if.template.ddc",
 "packages/angular/src/runtime.template": "packages/angular/src/runtime.template.ddc",
 "packages/angular/src/runtime/optimizations.template": "packages/angular/src/runtime/optimizations.template.ddc",
 "packages/angular/src/core/linker/app_view_utils.template": "packages/angular/src/core/linker/app_view_utils.template.ddc",
 "packages/angular/di.template": "packages/angular/di.template.ddc",
 "packages/angular/src/facade/facade.template": "packages/angular/src/facade/facade.template.ddc",
 "packages/angular/src/core/metadata.template": "packages/angular/src/core/metadata.template.ddc",
 "packages/angular/src/core/metadata/lifecycle_hooks.template": "packages/angular/src/core/metadata/lifecycle_hooks.template.ddc",
 "packages/angular/src/core/change_detection/change_detection_util.template": "packages/angular/src/core/change_detection/change_detection_util.template.ddc",
 "packages/angular/src/facade/lang.template": "packages/angular/src/facade/lang.template.ddc",
 "packages/angular/src/core/di/decorators.template": "packages/angular/src/core/di/decorators.template.ddc",
 "packages/angular/src/core/di.template": "packages/angular/src/core/di.template.ddc",
 "packages/angular/src/di/injector/empty.template": "packages/angular/src/di/injector/empty.template.ddc",
 "packages/angular/src/di/providers.template": "packages/angular/src/di/providers.template.ddc",
 "packages/angular/src/di/reflector.template": "packages/angular/src/di/reflector.template.ddc",
 "packages/angular/src/core/di/provider.template": "packages/angular/src/core/di/provider.template.ddc",
 "packages/angular/src/di/errors.template": "packages/angular/src/di/errors.template.ddc",
 "packages/angular/src/core/di/opaque_token.template": "packages/angular/src/core/di/opaque_token.template.ddc",
 "packages/angular/src/di/module.template": "packages/angular/src/di/module.template.ddc",
 "packages/angular/src/core/zone/ng_zone.template": "packages/angular/src/core/zone/ng_zone.template.ddc",
 "packages/angular/src/core/change_detection/pipe_transform.template": "packages/angular/src/core/change_detection/pipe_transform.template.ddc",
 "packages/angular/src/core/application_tokens.template": "packages/angular/src/core/application_tokens.template.ddc",
 "packages/angular/src/core/change_detection/change_detection.template": "packages/angular/src/core/change_detection/change_detection.template.ddc",
 "packages/angular/src/core/change_detection/change_detector_ref.template": "packages/angular/src/core/change_detection/change_detector_ref.template.ddc",
 "packages/angular/src/core/change_detection/constants.template": "packages/angular/src/core/change_detection/constants.template.ddc",
 "packages/angular/src/core/linker/exceptions.template": "packages/angular/src/core/linker/exceptions.template.ddc",
 "packages/angular/src/core/metadata/view.template": "packages/angular/src/core/metadata/view.template.ddc",
 "packages/angular/src/core/render/api.template": "packages/angular/src/core/render/api.template.ddc",
 "packages/angular/src/core/security.template": "packages/angular/src/core/security.template.ddc",
 "packages/angular/src/common/directives": "packages/angular/src/common/directives.ddc",
 "packages/angular/src/common/directives/ng_template_outlet.template": "packages/angular/src/common/directives/ng_template_outlet.template.ddc",
 "packages/angular/src/common/directives/ng_switch.template": "packages/angular/src/common/directives/ng_switch.template.ddc",
 "packages/angular/src/common/directives/ng_style.template": "packages/angular/src/common/directives/ng_style.template.ddc",
 "packages/angular/src/core/application_ref.template": "packages/angular/src/core/application_ref.template.ddc",
 "packages/angular/src/platform/dom/shared_styles_host.template": "packages/angular/src/platform/dom/shared_styles_host.template.ddc",
 "packages/angular/src/core/application_ref": "packages/angular/src/core/application_ref.ddc",
 "packages/angular/src/core/linker/component_resolver.template": "packages/angular/src/core/linker/component_resolver.template.ddc",
 "packages/angular/src/core/linker/app_view.template": "packages/angular/src/core/linker/app_view.template.ddc",
 "packages/angular/src/core/app_view_consts.template": "packages/angular/src/core/app_view_consts.template.ddc",
 "packages/angular/src/core/change_detection/component_state.template": "packages/angular/src/core/change_detection/component_state.template.ddc",
 "packages/angular/src/core/linker/view_type.template": "packages/angular/src/core/linker/view_type.template.ddc",
 "packages/angular/src/core/linker/element_ref.template": "packages/angular/src/core/linker/element_ref.template.ddc",
 "packages/angular/src/core/testability/testability": "packages/angular/src/core/testability/testability.ddc",
 "packages/angular/src/core/testability/testability.template": "packages/angular/src/core/testability/testability.template.ddc",
 "packages/angular/src/platform/dom/events/event_manager.template": "packages/angular/src/platform/dom/events/event_manager.template.ddc",
 "packages/angular/src/platform/bootstrap.template": "packages/angular/src/platform/bootstrap.template.ddc",
 "packages/angular/src/platform/browser_common.template": "packages/angular/src/platform/browser_common.template.ddc",
 "packages/angular/src/platform/browser/testability": "packages/angular/src/platform/browser/testability.ddc",
 "packages/js/js": "packages/js/js.ddc",
 "packages/js/js_util": "packages/js/js_util.ddc",
 "packages/angular/src/platform/browser/testability.template": "packages/angular/src/platform/browser/testability.template.ddc",
 "packages/angular/src/platform/browser_common": "packages/angular/src/platform/browser_common.ddc",
 "packages/angular/src/platform/bootstrap": "packages/angular/src/platform/bootstrap.ddc",
 "packages/angular/src/platform/browser/tools/tools": "packages/angular/src/platform/browser/tools/tools.ddc",
 "packages/angular/src/platform/browser/tools/common_tools": "packages/angular/src/platform/browser/tools/common_tools.ddc",
 "packages/angular/src/platform/browser/tools/tools.template": "packages/angular/src/platform/browser/tools/tools.template.ddc",
 "packages/angular/src/platform/browser/tools/common_tools.template": "packages/angular/src/platform/browser/tools/common_tools.template.ddc",
 "packages/angular/src/bootstrap/modules": "packages/angular/src/bootstrap/modules.ddc",
 "packages/angular/src/platform/dom/events/key_events": "packages/angular/src/platform/dom/events/key_events.ddc",
 "packages/angular/src/security/dom_sanitization_service_impl.template": "packages/angular/src/security/dom_sanitization_service_impl.template.ddc",
 "packages/angular/src/security/style_sanitizer.template": "packages/angular/src/security/style_sanitizer.template.ddc",
 "packages/angular/src/security/url_sanitizer.template": "packages/angular/src/security/url_sanitizer.template.ddc",
 "packages/angular/src/security/url_sanitizer": "packages/angular/src/security/url_sanitizer.ddc",
 "packages/angular/src/security/html_sanitizer": "packages/angular/src/security/html_sanitizer.ddc",
 "packages/angular/src/security/style_sanitizer": "packages/angular/src/security/style_sanitizer.ddc",
 "packages/angular/src/security/html_sanitizer.template": "packages/angular/src/security/html_sanitizer.template.ddc",
 "packages/angular/src/security/dom_sanitization_service": "packages/angular/src/security/dom_sanitization_service.ddc",
 "packages/angular/src/platform/dom/events/dom_events.template": "packages/angular/src/platform/dom/events/dom_events.template.ddc",
 "packages/angular/src/platform/browser/exceptions": "packages/angular/src/platform/browser/exceptions.ddc",
 "packages/angular/src/security/dom_sanitization_service.template": "packages/angular/src/security/dom_sanitization_service.template.ddc",
 "packages/angular/src/security/dom_sanitization_service_impl": "packages/angular/src/security/dom_sanitization_service_impl.ddc",
 "packages/angular/src/core/zone.template": "packages/angular/src/core/zone.template.ddc",
 "packages/angular/src/platform/dom/events/dom_events": "packages/angular/src/platform/dom/events/dom_events.ddc",
 "packages/angular/src/core/linker/dynamic_component_loader.template": "packages/angular/src/core/linker/dynamic_component_loader.template.ddc",
 "packages/angular/src/platform/browser/exceptions.template": "packages/angular/src/platform/browser/exceptions.template.ddc",
 "packages/angular/src/platform/dom/events/key_events.template": "packages/angular/src/platform/dom/events/key_events.template.ddc",
 "packages/angular/src/common/common_directives.template": "packages/angular/src/common/common_directives.template.ddc",
 "packages/angular/src/common/common_directives": "packages/angular/src/common/common_directives.ddc",
 "packages/angular/core.template": "packages/angular/core.template.ddc",
 "packages/angular/src/core/render.template": "packages/angular/src/core/render.template.ddc",
 "packages/angular/src/core/change_detection.template": "packages/angular/src/core/change_detection.template.ddc",
 "packages/angular/src/common/pipes.template": "packages/angular/src/common/pipes.template.ddc",
 "packages/angular/src/common/pipes/replace_pipe.template": "packages/angular/src/common/pipes/replace_pipe.template.ddc",
 "packages/angular/src/common/pipes/invalid_pipe_argument_exception.template": "packages/angular/src/common/pipes/invalid_pipe_argument_exception.template.ddc",
 "packages/angular/src/common/pipes/invalid_pipe_argument_exception": "packages/angular/src/common/pipes/invalid_pipe_argument_exception.ddc",
 "packages/angular/src/common/pipes/replace_pipe": "packages/angular/src/common/pipes/replace_pipe.ddc",
 "packages/angular/src/common/pipes/common_pipes.template": "packages/angular/src/common/pipes/common_pipes.template.ddc",
 "packages/angular/src/common/pipes/json_pipe": "packages/angular/src/common/pipes/json_pipe.ddc",
 "packages/angular/src/common/pipes/slice_pipe": "packages/angular/src/common/pipes/slice_pipe.ddc",
 "packages/angular/src/common/pipes/uppercase_pipe": "packages/angular/src/common/pipes/uppercase_pipe.ddc",
 "packages/angular/src/common/pipes/lowercase_pipe": "packages/angular/src/common/pipes/lowercase_pipe.ddc",
 "packages/angular/src/common/pipes/async_pipe": "packages/angular/src/common/pipes/async_pipe.ddc",
 "packages/angular/src/common/pipes/common_pipes": "packages/angular/src/common/pipes/common_pipes.ddc",
 "packages/angular/src/common/pipes/date_pipe": "packages/angular/src/common/pipes/date_pipe.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/angular/src/common/pipes/number_pipe": "packages/angular/src/common/pipes/number_pipe.ddc",
 "packages/angular/src/common/pipes/uppercase_pipe.template": "packages/angular/src/common/pipes/uppercase_pipe.template.ddc",
 "packages/angular/src/common/pipes/slice_pipe.template": "packages/angular/src/common/pipes/slice_pipe.template.ddc",
 "packages/angular/src/common/pipes": "packages/angular/src/common/pipes.ddc",
 "packages/angular/src/common/pipes/lowercase_pipe.template": "packages/angular/src/common/pipes/lowercase_pipe.template.ddc",
 "packages/angular/src/common/pipes/number_pipe.template": "packages/angular/src/common/pipes/number_pipe.template.ddc",
 "packages/angular/src/common/pipes/async_pipe.template": "packages/angular/src/common/pipes/async_pipe.template.ddc",
 "packages/angular/src/common/pipes/json_pipe.template": "packages/angular/src/common/pipes/json_pipe.template.ddc",
 "packages/angular/src/common/pipes/date_pipe.template": "packages/angular/src/common/pipes/date_pipe.template.ddc",
 "packages/angular/src/core/linker.template": "packages/angular/src/core/linker.template.ddc",
 "packages/angular/src/core/linker/query_list.template": "packages/angular/src/core/linker/query_list.template.ddc",
 "packages/http/http": "packages/http/http.ddc",
 "packages/http/src/streamed_request": "packages/http/src/streamed_request.ddc",
 "packages/http/src/multipart_request": "packages/http/src/multipart_request.ddc",
 "packages/http/src/boundary_characters": "packages/http/src/boundary_characters.ddc",
 "packages/http/src/multipart_file": "packages/http/src/multipart_file.ddc",
 "packages/server_communication/in_memory_data_service": "packages/server_communication/in_memory_data_service.ddc",
 "packages/server_communication/app_component.template": "packages/server_communication/app_component.template.ddc",
 "packages/server_communication/src/wiki/wiki_component.template": "packages/server_communication/src/wiki/wiki_component.template.ddc",
 "packages/server_communication/src/wiki/wikipedia_service.template": "packages/server_communication/src/wiki/wikipedia_service.template.ddc",
 "packages/jsonpadding/jsonpadding": "packages/jsonpadding/jsonpadding.ddc",
 "packages/jsonpadding/src/jsonp_call": "packages/jsonpadding/src/jsonp_call.ddc",
 "packages/server_communication/src/wiki/wiki_component": "packages/server_communication/src/wiki/wiki_component.ddc",
 "packages/server_communication/src/wiki/wiki_smart_component.template": "packages/server_communication/src/wiki/wiki_smart_component.template.ddc",
 "packages/stream_transform/stream_transform": "packages/stream_transform/stream_transform.ddc",
 "packages/stream_transform/src/throttle": "packages/stream_transform/src/throttle.ddc",
 "packages/stream_transform/src/from_handlers": "packages/stream_transform/src/from_handlers.ddc",
 "packages/stream_transform/src/buffer": "packages/stream_transform/src/buffer.ddc",
 "packages/stream_transform/src/merge": "packages/stream_transform/src/merge.ddc",
 "packages/stream_transform/src/scan": "packages/stream_transform/src/scan.ddc",
 "packages/stream_transform/src/bind": "packages/stream_transform/src/bind.ddc",
 "packages/stream_transform/src/async_where": "packages/stream_transform/src/async_where.ddc",
 "packages/stream_transform/src/debounce": "packages/stream_transform/src/debounce.ddc",
 "packages/stream_transform/src/take_until": "packages/stream_transform/src/take_until.ddc",
 "packages/stream_transform/src/start_with": "packages/stream_transform/src/start_with.ddc",
 "packages/stream_transform/src/switch": "packages/stream_transform/src/switch.ddc",
 "packages/stream_transform/src/async_map_buffer": "packages/stream_transform/src/async_map_buffer.ddc",
 "packages/stream_transform/src/audit": "packages/stream_transform/src/audit.ddc",
 "packages/stream_transform/src/tap": "packages/stream_transform/src/tap.ddc",
 "packages/stream_transform/src/concat": "packages/stream_transform/src/concat.ddc",
 "packages/server_communication/src/wiki/wikipedia_service": "packages/server_communication/src/wiki/wikipedia_service.ddc",
 "packages/server_communication/src/toh/hero_list_component.template": "packages/server_communication/src/toh/hero_list_component.template.ddc",
 "packages/server_communication/src/toh/hero_service.template": "packages/server_communication/src/toh/hero_service.template.ddc",
 "packages/server_communication/src/wiki/wiki_smart_component": "packages/server_communication/src/wiki/wiki_smart_component.ddc",
 "packages/server_communication/src/toh/hero_list_component": "packages/server_communication/src/toh/hero_list_component.ddc",
 "packages/server_communication/src/toh/hero_service": "packages/server_communication/src/toh/hero_service.ddc",
 "packages/server_communication/app_component": "packages/server_communication/app_component.ddc",
 "packages/angular/angular": "packages/angular/angular.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  // dartdevc only strips the final extension when adding modules to source
  // maps, so we need to do the same.
  if (moduleName != 'dart_sdk') {
    moduleName += '.ddc';
  }
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

// Attempt to detect --precompiled mode for tests, and set the base url
// appropriately, otherwise set it to "/".
var baseUrl = (function() {
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});
require(["web/main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.ignoreWhitelistedErrors(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
// Attempt to detect --precompiled mode for tests, and set the base url
// appropriately, otherwise set it to "/".
var baseUrl = (function() {
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (window.postMessage) {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  app.main.main();
});
})();
